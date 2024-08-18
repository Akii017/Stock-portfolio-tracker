import React from 'react';
import { Line } from 'react-chartjs-2';

const StockChart = ({ stockData }) => {
  const dates = Object.keys(stockData);
  const closingPrices = dates.map(date => stockData[date].Close);

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Stock Price',
        data: closingPrices,
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="stock-chart">
      <Line data={chartData} />
    </div>
  );
};

export default StockChart;
