import requests
import json
import re
from bs4 import BeautifulSoup
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize, sent_tokenize

# Opening JSON file
f = open("./data/data.json", encoding="utf-8")
images = json.load(f)

stop_words = set(stopwords.words('english'))


def is_noun(pos): return pos[:2] == 'NN' or pos[:2] == 'VB' or pos[:2] == 'JJ'


for i, image in enumerate(images):
    image['tags'] = list(dict.fromkeys(image['tags']))
    image['tags'] = list(filter(None, image['tags']))
    image['tags'] = new_list = [item[1:] if item[0] == "'" else item for item in image['tags']]

        
f = open("./data/data.json", "w+")
f.write(json.dumps(images))
f.close()
