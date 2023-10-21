from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lex_rank import LexRankSummarizer

def summerizer(s):
    summarizer = LexRankSummarizer()
    eng_token = Tokenizer("english")
    parser = PlaintextParser.from_string(s,eng_token)
    summary = summarizer(parser.document, sentences_count=2)
    summerized_text_list = [str(i) for i in summary]
    summerized_text = " ".join(summerized_text_list)
    return summerized_text

