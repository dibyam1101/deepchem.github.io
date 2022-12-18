import os
import requests
from bs4 import BeautifulSoup
import re
import shutil
import subprocess

tutorials = []

def clean(varStr): return re.sub(r'\W+|^(?=\d)','_', varStr)

r = requests.get('https://github.com/deepchem/deepchem/tree/master/examples/tutorials')
tutorialURL = 'https://raw.githubusercontent.com/deepchem/deepchem/master/examples/tutorials/'
soup = BeautifulSoup(r.content, 'html.parser')

fileNames = soup.find_all('a', attrs= {'class': 'js-navigation-open Link--primary'})
for fileName in fileNames:
    fileName = fileName.text
    if(fileName != '.gitignore' and fileName != 'assets'):
        tutorials.append(fileName)

print(tutorials)

try:
    os.makedirs('./html-notebooks')
    os.makedirs('./ipynb-notebooks')
except:
    print("Directories already exists, or could not create directories. ")

fromPath = "./ipynb-notebooks/"
toPath = "./html-notebooks/"

with open('./notebooks.txt', "w") as notebook_list:
            notebook_list.write('')

for tutorial in tutorials:
    try:
        file_name_html = f'{tutorial.rsplit(".")[0]}.html'
        response = requests.get(tutorialURL + tutorial)
        with open(f"./ipynb-notebooks/{tutorial}", "wb") as f:
          f.write(response.content)
        subprocess.call(f'python -m nbconvert --to html ./ipynb-notebooks/{tutorial}', shell=True)
        shutil.copyfile(fromPath + file_name_html, toPath + file_name_html)

        with open('./notebooks.txt', "a") as notebook_list:
            notebook_list.write(file_name_html + '\n')
    except:
        print(f"Could not process {tutorial}")


