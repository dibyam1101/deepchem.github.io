import os
import json
import gzip
import shutil
import requests
import subprocess
import pandas as pd
from bs4 import BeautifulSoup

datasets = []

r = requests.get('https://github.com/deepchem/deepchem/tree/master/datasets')
datasetURL = 'https://raw.githubusercontent.com/deepchem/deepchem/master/datasets/'
soup = BeautifulSoup(r.content, 'html.parser')

fileNames = soup.find_all('a', attrs= {'class': 'js-navigation-open Link--primary'})
for fileName in fileNames:
    fileName = fileName.text
    if(fileName != '.gitignore'):
        datasets.append(fileName.replace(' ', '%20'))

os.makedirs('../deepchem/data/datasets')

for dataset in datasets:
    subprocess.call(f'curl -o ../deepchem/data/datasets/{dataset} {datasetURL + dataset}', shell=True)

fromPath = "../deepchem/data/datasets/"
toPath = "../deepchem/data/datasetsCSV/"
finalPath = "../deepchem/data/datasetsJSON/"

fileNames = os.listdir(fromPath)

os.makedirs('../deepchem/data/datasetsCSV')

for fileName in fileNames:
    if fileName.endswith(".csv"):
        shutil.copyfile(fromPath + fileName, toPath + fileName)
    elif fileName.endswith(".pkl.gz"):
        continue
    elif fileName.endswith(".gz"):
        inFile = fromPath + fileName
        outfile = toPath + fileName[:-3]
        with gzip.open(inFile, 'rb') as f_in:
            with open (outfile, 'wb') as f_out:
                shutil.copyfileobj(f_in, f_out)
    else:
        continue

fileNames = os.listdir(toPath)

for i in range(len(fileNames)):
    if fileNames[i].endswith('.sdf.csv'):
        fileNames[i] = fileNames[i].replace('.sdf.csv', '')
    elif fileNames[i].endswith('.csv'):
        fileNames[i] = fileNames[i].replace('.csv', '')

with open('../deepchem/data/datasets.json', 'w') as f:
    f.write(json.dumps(fileNames, indent=4))

fileNames = os.listdir(toPath)

os.makedirs('../deepchem/data/datasetsJSON')

for fileName in fileNames:
    file = toPath + fileName
    df = pd.read_csv(file)
    file = finalPath + fileName

    jsonFile = df.iloc[0:5].to_json(orient='records')
    with open(file[:-3] + 'json', 'w') as outfile:
        outfile.write(jsonFile)