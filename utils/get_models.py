"""
    Python script to scrape the all the models information from the official deepchem documentation
"""

import os
import json
import dataclasses
from json import JSONEncoder
from bs4 import BeautifulSoup
import requests

DOC_URL = 'https://deepchem.readthedocs.io/en/latest/api_reference/models.html#model-cheatsheet'
REDIRECT_URL = 'https://deepchem.readthedocs.io/en/latest/api_reference/models.html#'
TABLES = {
    'id81': 'General',
    'id82': 'Molecule',
    'id83': 'Material'
}

@dataclasses.dataclass
class Model:
    """
        Model class to store a single model information
        Attributes:
            name: Name of the model
            url: redirect url to the model on the official deepchem documentation
            category: Category of the model
            featurizers: List of featurizers supported by the model
            backends: List of backends supported by the model
            types: List of types supported by the model
            id: Unique id of the model
    """
    name: str
    url: str
    category: str
    featurizers: list
    backends: list
    types: list
    model_id: int

class ModelListEncoder(JSONEncoder):
    """
        ModelEncoder class to encode the Model object to JSON
    """
    def default(self, o):
        return o.__dict__

class ModelList:
    """
        ModelList class to store the list of models
    """
    def __init__(self, models):
        self.models = models

    def add(self, model):
        """
            Add a model to the list of models
        """
        self.models.append(model)

    def to_json(self):
        """
            Convert the list of models to JSON
        """
        return json.dumps(self.models, indent=4, cls=ModelListEncoder)

class BackendList:
    """
        BackendList class to store the list of backends
    """
    def __init__(self, backends):
        self.backends = backends

    def add(self, backend):
        """
            Add a backend to the list of backends
        """
        self.backends.append(backend)

    def to_json(self):
        """
            Convert the list of backends to JSON
        """
        self.backends = list({item for sublist in self.backends for item in sublist})
        return json.dumps(self.backends, indent=4)

class TypeList:
    """
        TypeList class to store the list of types
    """
    def __init__(self, typs):
        self.typs = typs

    def add(self, typ):
        """
            Add a type to the list of types
        """
        self.typs.append(typ)

    def to_json(self):
        """
            Convert the list of types to JSON
        """
        self.typs = list({item for sublist in self.typs for item in sublist})
        self.typs = list(filter(None, self.typs))
        return json.dumps(self.typs, indent=4)

class FeaturizerList:
    """
        FeaturizerList class to store the list of featurizers
    """
    def __init__(self, featurizers):
        self.featurizers = featurizers

    def add(self, featurizer):
        """
            Add a featurizer to the list of featurizers
        """
        self.featurizers.append(featurizer)

    def to_json(self):
        """
            Convert the list of featurizers to JSON
        """
        self.featurizers = list({item for sublist in self.featurizers for item in sublist})
        self.featurizers = list(filter(None, self.featurizers))
        return json.dumps(self.featurizers, indent=4)

def scraper(model_list: ModelList, backend_list: BackendList, type_list: TypeList, featurizer_list: FeaturizerList):
    """
        Scraper function to scrape the models information from the official deepchem documentation
    """
    req = requests.get(DOC_URL, timeout=10)
    soup = BeautifulSoup(req.content, 'html.parser')
    index = 0

    for table_id in TABLES:
        table = soup.find('table', attrs = {'id': table_id})
        table_rows = table.find_all('tr')

        for table_row in table_rows:
            table_cols = table_row.find_all('td')
            table_cols = [ele.text.strip() for ele in table_cols]

            if len(table_cols) != 0:
                name = table_cols[0]
                url = REDIRECT_URL + name.lower()
                category = TABLES[table_id]
                featurizers = table_cols[3].split(' ') if table_cols[3] != '' else []
                backends = table_cols[4].split('/')
                backends = ['PyTorch' if item in {"PTorch", "Torch"} else item for item in backends]
                types = table_cols[2].split('/ ') if table_cols[2] != '' else []

                # handling an oulier case in tab, uneven whitespace
                if table_id == 'id83':
                    types = table_cols[2].split('/')

                index += 1

                backend_list.add(backends)
                type_list.add(types)
                featurizer_list.add(featurizers)
                model_list.add(Model(name, url, category, featurizers, backends, types, index))

def main():
    """
        Main function to execute the scraper
    """
    model_list = ModelList([])
    backend_list = BackendList([])
    type_list = TypeList([])
    featurizer_list = FeaturizerList([])

    scraper(model_list, backend_list, type_list, featurizer_list)

    os.makedirs('../deepchem/data/models')

    with open('../deepchem/data/models/models.json', 'w', encoding="utf-8") as file:
        file.write(model_list.to_json())

    with open('../deepchem/data/models/backends.json', 'w', encoding="utf-8") as file:
        file.write(backend_list.to_json())

    with open('../deepchem/data/models/types.json', 'w', encoding="utf-8") as file:
        file.write(type_list.to_json())

    with open('../deepchem/data/models/featurizers.json', 'w', encoding="utf-8") as file:
        file.write(featurizer_list.to_json())

if __name__ == '__main__':
    main()
