from newsdataapi import NewsDataApiClient
import requests

class NewsFetcher:
    def __init__(self,keyword) -> None:
        self.key = 'pub_31284c9a4a173267fcdea6f4e3ee581d42fb4'
        self.client = NewsDataApiClient(self.key)
        self.query = keyword

    def getFiltered(self, data):
        
        return data
    def getNews(self):
        link = f'https://newsdata.io/api/1/news?apikey=pub_31284c9a4a173267fcdea6f4e3ee581d42fb4&q={self.query}'
        news_data = requests.get(link)
        data = news_data.json()['results']
        data = self.getFiltered(data)

        return data