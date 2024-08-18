from flask import Flask, jsonify, request
import requests
import pandas as pd

app = Flask(__name__)

API_KEY = 'OGH6X91IWI2NE0HK'

@app.route('/stock', methods=['GET'])
def get_stock_data():
    symbol = request.args.get('symbol')
    url = f'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol={symbol}&apikey={API_KEY}'
    response = requests.get(url).json()

    # Process data using pandas
    data = response['Time Series (Daily)']
    df = pd.DataFrame.from_dict(data, orient='index').sort_index()
    df = df.rename(columns={
        "1. open": "Open",
        "2. high": "High",
        "3. low": "Low",
        "4. close": "Close",
        "5. volume": "Volume"
    })

    return jsonify(df.to_dict())

if __name__ == '__main__':
    app.run(debug=True)
