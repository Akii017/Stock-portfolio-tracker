import React, { useState } from 'react';
import axios from 'axios';

const StockInput = ({ setStockData }) => {
  const [symbol, setSymbol] = useState('');

  const fetchStockData = async () => {
    const response = await axios.get(`http://localhost:5000/stock?symbol=${symbol}`);
    setStockData(response.data);
  };

  return (
    <div className="stock-input">
      <input
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value.toUpperCase())}
        placeholder="Enter Stock Symbol"
      />
      <button onClick={fetchStockData}>Track Stock</button>
    </div>
  );
};

export default StockInput;
