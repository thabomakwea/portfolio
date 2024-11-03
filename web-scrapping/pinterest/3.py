import requests
import json
import re
from bs4 import BeautifulSoup
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize, sent_tokenize

# Opening JSON file
f = open("./data.json", encoding="utf-8")
images = json.load(f)

stop_words = set(stopwords.words('english'))
def is_noun(pos): return pos[:2] == 'NN' or pos[:2] == 'VB' or pos[:2] == 'JJ'
for i, image in enumerate(images):

    # do the nlp stuff
    tokenized = nltk.word_tokenize(image['alt_text'])
    nouns = [word for (word, pos) in nltk.pos_tag(
        tokenized) if is_noun(pos) if not word in stop_words]

    image['tags'] = nouns

f = open("./data/data.json", "w+")
f.write(json.dumps(images))
f.close()
