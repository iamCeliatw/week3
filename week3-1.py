import urllib.request as req
import json
src = "https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json"
import ssl
ssl._create_default_https_context = ssl._create_unverified_context
with req.urlopen(src) as response:
    data = json.load(response)  # 利用json模組處理json資料格式
# 將名稱列表出來
mylist = data['result']['results']

with open('data.csv', 'w', encoding='utf-8') as file:
    for key in mylist:
        if key['xpostDate'] > '2014/12/31':
           str = key['file']
           lowUrl = str.lower()
           firstUrl = lowUrl[0:lowUrl.find('jpg')]
        file.write(f"{key['stitle']},{key['address'][3:8]},{key['longitude']},{key['latitude']},{firstUrl}jpg\n")




