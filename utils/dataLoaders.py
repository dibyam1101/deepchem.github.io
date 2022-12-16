import os
import re
import requests
from bs4 import BeautifulSoup
import urllib.request

dataLoaders = []
dataLoaderURLs = {}

r = requests.get('https://github.com/deepchem/deepchem/tree/master/deepchem/molnet/load_function')
URL = 'https://github.com/deepchem/deepchem/blob/master/deepchem/molnet/load_function/'
soup = BeautifulSoup(r.content, 'html.parser')

fileNames = soup.find_all('a', attrs= {'class': 'js-navigation-open Link--primary'})
for fileName in fileNames:
    fileName = fileName.text
    if(fileName.endswith('_datasets.py')):
        dataLoaders.append(fileName)

for i in range(len(dataLoaders)):
    index = dataLoaders[i].find('_')
    loaderURL = URL + dataLoaders[i]

    _r = requests.get(loaderURL)
    _soup = BeautifulSoup(_r.content, 'html.parser')
    _name = _soup.findAll('span', attrs= {'class': 'pl-s'})
    for _n in _name:
        _n = _n.text
        if(_n.startswith('"https://deepchemdata.s3-us-west-1.amazonaws.com/datasets/')):
            dataLoaderURLs[dataLoaders[i][:index]] = _n
            break

# os.system(f'cmd /c "curl -o --range 0-2 deepchem/data/dataLoaders/delaney-processed.csv "https://deepchemdata.s3-us-west-1.amazonaws.com/datasets/delaney-processed.csv""')
os.system(f'cmd /c "curl -o --range 0-2 temp.html "www.google.com""')

# for dataset in dataLoaderURLs:
#     # get the dataset name
#     index = dataLoaderURLs[dataset].find('datasets/')
#     datasetName = dataLoaderURLs[dataset][index + 9:]
#     # remove the double quotes
#     datasetName = datasetName.replace('"', '')
#     if datasetName != '':
#         os.system(f'cmd /c "curl -o  deepchem/data/dataLoaders/{datasetName} {dataLoaderURLs[dataset]} | head -10"')