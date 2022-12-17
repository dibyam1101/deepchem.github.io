from bs4 import BeautifulSoup
import json
import re

tutorials = []

def clean(varStr): return re.sub(r'\W+|^(?=\d)','_', varStr)

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
                code_cell['class'] = code_cell.get('class', []) + ['overflow-x-scroll']

            soup.find('body').hidden=True
            html = soup.body.prettify()

            cleaned_tutorial_name = clean(file.strip()[:-5])

            with open(f'../deepchem/data/tutorials/{cleaned_tutorial_name}.js', 'w', encoding = "utf-8" ) as data_file:
                data_file.write('export default')
                data_file.write(json.dumps({"html" : html}))

            with open(f'../deepchem/pages/tutorials/{file.strip()[:-5]}.js', 'w', encoding = "utf-8" ) as component:
                component.write(f"""
                    import TutorialLayout from "../../layouts/tutorial";
                    import notebookStyles from "../../data/tutorials/styles";
                    import innerHTML from "../../data/tutorials/{file.strip()[:-5]}.js";
                    import {{useEffect}} from "react";
                    import scrollnav from "scrollnav";

                    const {cleaned_tutorial_name} = () => {{

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

                    return <div dangerouslySetInnerHTML={{{{
                                           __html: `${{innerHTML.html}} ${{notebookStyles}}`,
                                       }}}}
                                   ></div>
                                   }}

                    {cleaned_tutorial_name}.Layout = TutorialLayout;

                    export default {cleaned_tutorial_name};
                """)

            tutorial['title'] = title
            tutorial['fileName'] = file.strip()
#             tutorial['html'] = html
            tutorials.append(tutorial)

with open('../deepchem/data/tutorials/tutorials.js', 'w') as f:
    f.write("export default")
    f.write(json.dumps(tutorials))
