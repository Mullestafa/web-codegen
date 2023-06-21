from flask import Flask
from placeholder_logic import get_placeholder_response

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def placeholder_api():
    response = get_placeholder_response()
    return response

if __name__ == '__main__':
    app.run()
