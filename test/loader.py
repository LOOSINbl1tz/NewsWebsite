import json
from news_api_call import NewsFetcher

news = NewsFetcher('politics')
news_data = news.getNews()

json_file_path = "data/data.json"

with open(json_file_path,'w') as file:
     file.write(json.dumps(news_data))

content = None
with open(json_file_path, 'r') as j:
     content = json.loads(j.read())

for i in content:
     print(i['news_title'])

