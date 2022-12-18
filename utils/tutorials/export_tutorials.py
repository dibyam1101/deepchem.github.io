from bs4 import BeautifulSoup
import json
import re

tutorials = []

def to_valid_identifier(s):
    s = s.replace(" ", "_")
    s = re.sub(r'[^0-9a-zA-Z_]', '_', s)
    if s[0].isdigit():
        s = "_" + s
    return s

def to_valid_url_path(s):
    s = re.sub(r"[^\w\s]", "-", s)
    s = re.sub(r'[ _]+', '-', s)
    return s


def get_component(file_name, component_name):
    #Remove file extension if any
    file_name = file_name.rsplit(".")[0]

    return f"""
import TutorialLayout from "../../layouts/tutorial";
import notebookStyles from "../../data/tutorials/styles";
import innerHTML from "../../data/tutorials/{file_name}.js";
import {{useEffect}} from "react";
import scrollnav from "scrollnav";

const {component_name} = () => {{

useEffect(() => {{
        document.getElementsByClassName('scroll-nav')[0]?.remove();
        const content = document.querySelector(".notebook");
        const insertTarget = document.querySelector(".notebook");

        if (insertTarget && content) {{
            scrollnav.init(content, {{
                sections: "h1, h2", insertTarget: insertTarget, insertLocation: "after",
            }});
        }}

        MathJax?.Hub?.Queue(["Typeset", MathJax.Hub]);
    }}, []);

return <div
    className="overflow-x-scroll"
    dangerouslySetInnerHTML={{{{__html: `${{innerHTML.html}} ${{notebookStyles}}`,}}}}
></div>
}}

{component_name}.Layout = TutorialLayout;

export default {component_name};
"""


with open('./notebooks.txt', 'r') as notebook_files:
    for file in notebook_files:
        with open(f'./html-notebooks/{file.strip()}', 'r', encoding="utf-8") as f:
            tutorial = {}
            soup = BeautifulSoup(f.read(), 'html.parser')
            body = soup.body

            title = soup.find('h1').text
            headings = body.find_all(['h1', 'h2'])
            for heading in headings:
                del heading['id']

            code_cells = body.find_all('pre')
            for code_cell in code_cells:
                code_cell['class'] = code_cell.get(
                    'class', []) + ['overflow-x-scroll']

            soup.find('body').hidden = True
            html = soup.body.prettify()

            file_name = file.rsplit(".")[0]
            urlified_file_name = to_valid_url_path(file_name)
            component_name = to_valid_identifier(file_name)

            with open(f'../../deepchem/data/tutorials/{urlified_file_name}.js', 'w', encoding="utf-8") as data_file:
                data_file.write('export default')
                data_file.write(json.dumps({"html": html}))

            with open(f'../../deepchem/pages/tutorials/{urlified_file_name}.js', 'w', encoding="utf-8") as component:
                component.write(get_component(urlified_file_name, component_name))
            tutorial['title'] = title
            tutorial['urlifiedFileName'] = urlified_file_name
#             tutorial['html'] = html
            tutorials.append(tutorial)

with open('../../deepchem/data/tutorials/tutorials.js', 'w') as f:
    f.write("export default")
    f.write(json.dumps(tutorials))
