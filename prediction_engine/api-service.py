from flask import Flask, make_response
from placeholder_logic import get_placeholder_response

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def placeholder_api():
    response = get_placeholder_response()
    response = make_response(response)
    response.headers.add('Access-Control-Allow-Origin', 'chrome-extension://nhgflbeiokldandngpfgompmkbmgdjda')
    return response

if __name__ == '__main__':
    app.run(debug=True)
