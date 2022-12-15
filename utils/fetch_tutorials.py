import os
import requests
from bs4 import BeautifulSoup

tutorials = []

r = requests.get('https://github.com/deepchem/deepchem/tree/master/examples/tutorials')
tutorialURL = 'https://raw.githubusercontent.com/deepchem/deepchem/master/examples/tutorials/'
soup = BeautifulSoup(r.content, 'html.parser')

fileNames = soup.find_all('a', attrs= {'class': 'js-navigation-open Link--primary'})
for fileName in fileNames:
    fileName = fileName.text
    if(fileName != '.gitignore' and fileName != 'assets'):
        tutorials.append(fileName.replace(' ', '%20'))

print(tutorials)

for tutorial in tutorials:
    response = requests.get(tutorialURL + tutorial)
    with open(f"./ipynb-notebooks/{tutorial}", "wb") as f:
      f.write(response.content)
    os.system(f'jupyter nbconvert --to html ./ipynb-notebooks/{tutorial}')
    os.system(f'mv ./ipynb-notebooks/{tutorial[:-5]}html ./html-notebooks')
    os.system(f'ls ipynb-notebooks/ > notebooks.txt')


