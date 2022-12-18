import os
import requests
from bs4 import BeautifulSoup
import re

tutorials = []

def clean(varStr): return re.sub(r'\W+|^(?=\d)','_', varStr)

r = requests.get('https://github.com/deepchem/deepchem/tree/master/examples/tutorials')
tutorialURL = 'https://raw.githubusercontent.com/deepchem/deepchem/master/examples/tutorials/'
soup = BeautifulSoup(r.content, 'html.parser')

fileNames = soup.find_all('a', attrs= {'class': 'js-navigation-open Link--primary'})
for fileName in fileNames:
    fileName = fileName.text
    if fileName.endswith('.ipynb'):
        tutorials.append(fileName)

print(tutorials)

if not os.path.exists('ipynb_notebooks'):
  os.makedirs('ipynb_notebooks')
if not os.path.exists('html_notebooks'):
  os.makedirs('html_notebooks')

for tutorial in tutorials:
    response = requests.get(tutorialURL + tutorial)
    with open(f'./ipynb_notebooks/{tutorial}', 'wb') as f:
      f.write(response.content)
      # os.system(f'jq -M \'del(.metadata.widgets)\' ./ipynb_notebooks/{tutorial} > ./ipynb_notebooks/{tutorial}')
      os.system(f'jupyter nbconvert --to html ./ipynb_notebooks/{tutorial}')
      os.system(f'mv ./ipynb_notebooks/{(tutorial[:-6])}.html ./html_notebooks')
      os.system(f'ls html_notebooks/ > notebooks.txt')
