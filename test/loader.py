import json

json_file_path = "data/data.json"

with open(json_file_path, 'r') as j:
     contents = json.loads(j.read())
     print(contents)

