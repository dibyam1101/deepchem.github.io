import requests
import json
from json import JSONEncoder
from bs4 import BeautifulSoup

class Model:
    def __init__(self, name, url, category, featurizers, backends, types):
        self.name = name
        self.url = url
        self.category = category
        self.backends = backends
        self.types = types
        self.featurizers = featurizers

class ModelEncoder(JSONEncoder):
        def default(self, o):
            return o.__dict__

r = requests.get('https://deepchem.readthedocs.io/en/latest/api_reference/models.html#model-cheatsheet')
link = 'https://deepchem.readthedocs.io/en/latest/api_reference/models.html#'
models = []

def createModel(cols):
    name = cols[0]    
    url = link + name.lower()
    category = tables[id]
    featurizers = cols[3].split(' ')
    backends = cols[4].split('/')
    types = cols[2].split('/ ')
    if id == 'id83':
        types = cols[2].split('/')

    return Model(name, url, category, featurizers, backends, types)

soup = BeautifulSoup(r.content, 'html.parser')
tables = {'id81': 'General', 'id82':'Molecule', 'id83':'Material'}
for id in tables:
    table = soup.find('table', attrs = {'id': id})
    rows = table.find_all('tr')
    
    for row in rows:
        cols = row.find_all('td')
        cols = [ele.text.strip() for ele in cols]
        if len(cols) != 0:
            model = createModel(cols)
            models.append(model)

modelsJSONData = json.dumps(models, indent=4, cls=ModelEncoder)

with open('deepchem.github.io/deepchem/data/models.json', 'w') as f:
    f.write(modelsJSONData)