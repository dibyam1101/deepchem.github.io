link = "https://github.com/deepchem/deepchem/blob/master/deepchem/molnet/load_function/bace_datasets.py"

import requests
from bs4 import BeautifulSoup

r = requests.get(link)
soup = BeautifulSoup(r.content, 'html.parser')

# # get section with id bace-dataset
# bace = soup.find('section', attrs={'id': 'bace-dataset'})
# print(bace)

info = soup.findAll('span', attrs={'class': 'pl-s'})

inside = 0
information = ''
for i in info:
    infom = i.text
    if infom[:3] == '"""' or infom[:5] == '  """':
        inside = 1 - inside

    if inside:
        information += infom + '\n'

print(information)