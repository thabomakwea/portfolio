from selenium import webdriver
from bs4 import BeautifulSoup
import time
import requests
import urllib
from PIL import Image
import json

#  Any infinity scroll URL
var = "love%20quotes"
url = "https://za.pinterest.com/pin/490962796889927204/visual-search/?x=16&y=16&w=530&h=670&imageSignature=3c6f21dca68d685938de67c4ecdb9805"
ScrollNumber = 20  # The depth we wish to load
sleepTimer = 1    # Waiting 1 second for page to load
pins = [ {'link': 'start'}]
#  Bluetooth bug circumnavigate
options = webdriver.ChromeOptions() 
options.add_experimental_option("excludeSwitches", ["enable-logging"])

driver = webdriver.Chrome(options=options)  # path=r'to/chromedriver.exe'
driver.get(url)

for _ in range(1,ScrollNumber):
    driver.execute_script("window.scrollTo(1,100000)")
    print("scrolling")
    time.sleep(sleepTimer)

    soup = BeautifulSoup(driver.page_source,'html.parser')

    for i, link in enumerate(soup.find_all('a')):
        print(link.get('href'))
        obj = {
            "link": link.get('href'),
        }
        if obj in pins:
            print('Duplicate: ', link.get('href'))
        else:
            pins.append({
                "link": link.get('href'),
            })

f = open("pins.json", "w+")
f.write(json.dumps(pins))
f.close()
