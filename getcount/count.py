from bs4 import BeautifulSoup
from requests import get

class GetCount:

    def getPage(self):
        url = 'https://www.worldometers.info/coronavirus/country/uk/'
        req = get(url)
        return req.content.decode()

    def getData(self):
        req = self.getPage()
        bs = BeautifulSoup(req, 'html.parser')
        value = bs.select(
            '.content-inner > div:nth-child(7) > div:nth-child(2) > span:nth-child(1)'
        )[0].getText()
        
        value = value.replace(',', '')
        return int(value)


    
