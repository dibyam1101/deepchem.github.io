from bs4 import BeautifulSoup
import json

tutorials = []

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



            tutorial['title'] = title
            tutorial['html'] = html
            tutorials.append(tutorial)

with open('../deepchem/data/tutorials/tutorials.js', 'w') as f:
    f.write("export default")
    f.write(json.dumps(tutorials))
