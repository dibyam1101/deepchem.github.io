import os
import gzip
import shutil

fromPath = "../deepchem/data/datasets/"
toPath = "../deepchem/data/datasetsFormat/"

fileNames = os.listdir(fromPath)

os.makedirs('../deepchem/data/datasetsFormat')

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

# load csv files
import pandas as pd

fileNames = os.listdir(toPath)

# if filename has .sdf, remove it
for i in range(len(fileNames)):
    # if filename has .sdf, remove it
    if fileNames[i].replace('.sdf', '') != fileNames[i]:
        fileNames[i] = fileNames[i].replace('.sdf', '')

print(fileNames)

# convert list to json
import json
with open('../deepchem/data/datasets.json', 'w') as f:
    f.write(json.dumps(fileNames, indent=4))

for fileName in fileNames:
    file = toPath + fileName
    df = pd.read_csv(file)

    # convert the first 5 rows to json
    reqd = df.iloc[0:5].to_json(orient='records')
    # save the json to a file
    with open(file[:-3] + 'json', 'w') as outfile:
        outfile.write(reqd)

    os.remove(file)

# delete csv files from datasetsFormat


# list all files in the directory
import subprocess
subprocess.call(["ls", "-l", "../deepchem/data/"])
subprocess.call(["ls", "-l", "../deepchem/data/datasets/"])
subprocess.call(["ls", "-l", "../deepchem/data/datasetsFormat/"])
