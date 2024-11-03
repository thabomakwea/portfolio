import requests
import json
import re
from bs4 import BeautifulSoup
import time
from PIL import Image, ImageFont, ImageDraw
import os.path
from os.path import basename

# Opening JSON file
f = open("./data/pins.json", encoding="utf-8")
category = 'inspirational'
pins = json.load(f)
images = []
for i, pin in enumerate(pins, start=1):
    url = 'https://za.pinterest.com' + pin['link']
    response = requests.get(url)
    html = response.text
    soup = BeautifulSoup(html, "html.parser")
    reader = soup.find("div", "Closeup")
    src = soup.find('img')
    image_name = ''
    if soup.find('img') is not None:
        image_name = category + '-quote-' + \
            str(i) + os.path.splitext(basename(src['src']))[1]  
        img = Image.open(requests.get(src['src'], stream=True).raw)
        images.append({
            'url': url,
            'link': pin['link'].strip(),
            'pin': src['src'],
            'basename': basename(src['src']),
            'name':  image_name,
            'alt_text': src['alt'],
            'category': category,
            'tags': [],
            'text': '',
            'height': img.height,
            'width': img.width
        })
        f = open("data.json", "w+")
        f.write(json.dumps(images))
        f.close()
        
        img.save(image_name)

