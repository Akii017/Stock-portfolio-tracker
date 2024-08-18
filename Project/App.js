import React, { useState } from 'react';
import StockInput from './components/StockInput';
import StockChart from './components/StockChart';
import './App.css';

const App = () => {
  const [stockData, setStockData] = useState({});

  return (
    <div className="App">
      <h1>Stock Portfolio Tracker</h1>
      <StockInput setStockData={setStockData} />
      {Object.keys(stockData).length > 0 && <StockChart stockData={stockData} />}
    </div>
  );
};

export default App;
