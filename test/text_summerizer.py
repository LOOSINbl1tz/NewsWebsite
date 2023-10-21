from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lex_rank import LexRankSummarizer
import json

with open('data/data.json') as file:
    s = json.loads(file.read())['news_body']

# print(s)
summarizer = LexRankSummarizer()
eng_token = Tokenizer("english")

parser = PlaintextParser.from_string(s,eng_token)
summary = summarizer(parser.document, sentences_count=1)

for sentence in summary:
    print(sentence)
