from json import dumps
from time import time_ns

from flask import Flask
from flask import render_template

from getcount.count import GetCount

app = Flask(__name__)
counts = GetCount()

@app.route('/')
def index():
    return render_template('base.html')


@app.route('/getcount')
def getCount():
    try:
        gotData = counts.getData()
    except:
        f = open('.count')
        gotData = f.read()
        f.close()

    return dumps({
        'timestamp': time_ns(),
        'count': str(gotData),
    })


if __name__ == '__main__':
    app.run(host='0.0.0.0')