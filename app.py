from json import dumps
from time import time_ns

from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('base.html')

@app.route('/getcount')
def getCount():
    return dumps({
        'timestamp': time_ns(),
        'count': 3605,
    })


if __name__ == '__main__':
    app.run(debug=True)