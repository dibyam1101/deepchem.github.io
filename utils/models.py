import requests
import json
from json import JSONEncoder
from bs4 import BeautifulSoup


class Model:
    def __init__(self, name, url, category, featurizers, backends, types, id):
        self.name = name
        self.url = url
        self.category = category
        self.backends = backends
        self.types = types
        self.featurizers = featurizers
        self.id = id


class ModelEncoder(JSONEncoder):
        def default(self, o):
            return o.__dict__


modelId = 0
models = []
backendList = []
typeList = []
featurizerList = []

r = requests.get('https://deepchem.readthedocs.io/en/latest/api_reference/models.html#model-cheatsheet')
link = 'https://deepchem.readthedocs.io/en/latest/api_reference/models.html#'
soup = BeautifulSoup(r.content, 'html.parser')
tables = {'id81': 'General', 'id82':'Molecule', 'id83':'Material'}
for id in tables:
    table = soup.find('table', attrs = {'id': id})
    rows = table.find_all('tr')
    
    for row in rows:
        cols = row.find_all('td')
        cols = [ele.text.strip() for ele in cols]
        if len(cols) != 0:
            name = cols[0]    
            url = link + name.lower()
            category = tables[id]
            featurizers = cols[3].split(' ') if cols[3] != '' else []
            backends = cols[4].split('/')
            backends = ['PyTorch' if (item == 'PTorch' or item == 'Torch')  else item for item in backends]
            types = cols[2].split('/ ') if cols[2] != '' else []
            if id == 'id83':
                types = cols[2].split('/')
            modelId += 1

            backendList.append(backends)
            typeList.append(types)
            featurizerList.append(featurizers)

            model = Model(name, url, category, featurizers, backends, types, modelId)
            models.append(model)


modelsJSONData = json.dumps(models, indent=4, cls=ModelEncoder)
with open('../deepchem/data/models.json', 'w') as f:
    f.write(modelsJSONData)

backendList = list(set([item for sublist in backendList for item in sublist]))
with open('../deepchem/data/backends.json', 'w') as f:
    f.write(json.dumps(backendList, indent=4))

typeList = list(set([item for sublist in typeList for item in sublist]))
typeList = list(filter(None, typeList))
with open('../deepchem/data/types.json', 'w') as f:
    f.write(json.dumps(typeList, indent=4))

featurizerList = list(set([item for sublist in featurizerList for item in sublist]))
featurizerList = list(filter(None, featurizerList))
with open('../deepchem/data/featurizers.json', 'w') as f:
    f.write(json.dumps(featurizerList, indent=4))