import os
import json
import gzip
import shutil
import pandas as pd

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

    # convert the first 5 rows to json
    jsonFile = df.iloc[0:5].to_json(orient='records')
    # save the json to a file
    with open(file[:-3] + 'json', 'w') as outfile:
        outfile.write(jsonFile)


# # # list all files in the directory
# # import subprocess
# # print(fileNames)
# # subprocess.call(["ls", "-l", "../deepchem/data/"])
# # subprocess.call(["ls", "-l", "../deepchem/data/datasets/"])
# # subprocess.call(["ls", "-l", "../deepchem/data/datasetsFormat/"])
