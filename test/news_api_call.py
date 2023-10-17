from newsdataapi import NewsDataApiClient
import requests

class NewsFetcher:
    def __init__(self,keyword) -> None:
        self.key = 'pub_31284c9a4a173267fcdea6f4e3ee581d42fb4'
        self.client = NewsDataApiClient(self.key)
        self.query = keyword

    def getFiltered(self, data):
        new_data = []
        for contents in data:
            d = dict()
            if self.query.lower() in contents['category'] or 'top' in contents['category']:
                print(contents['category'])
                article_id = contents['article_id']
                news_title = contents['title']
                news_body = contents['content']
                date_time = contents['pubDate']
                link = contents['link']
                creator = contents['creator']
                d['article_id'] = article_id
                d['news_title'] = news_title
                d['news_body'] = news_body
                d['date_time'] = date_time
                d['link'] = link
                d['creator'] = creator
                new_data.append(d)
        return new_data
    
    def getNews(self):
        link = f'https://newsdata.io/api/1/news?apikey=pub_31284c9a4a173267fcdea6f4e3ee581d42fb4&q={self.query}'
        news_data = requests.get(link)
        data = news_data.json()['results']
        data = self.getFiltered(data)
        return data