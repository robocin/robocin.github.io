import os
import json

files = os.listdir()

data = {}
data['TDP'] = []
for x in files:
    if((x != "script.py") and (x != "papers.json")):
        data['TDP'].append({
            'name': x,
            'path': 'https://robocin.com.br/archives/'+x
    })

with open('papers.json', 'w', encoding='utf-8') as outfile:
    json.dump(data, outfile, ensure_ascii=False, indent=4)
