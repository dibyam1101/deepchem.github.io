import os
import gzip
import shutil
fromPath = "../deepchem/data/datasets/"
toPath = "../deepchem/data/datasetsFormat/"

fileNames = os.listdir(fromPath)

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
import numpy as np

fileNames = os.listdir(toPath)

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