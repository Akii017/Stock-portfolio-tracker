# Stock Portfolio Tracker (still under development)

Welcome to the Stock Portfolio Tracker! This application is designed to help you manage and monitor your stock investments efficiently. With real-time data fetching and comprehensive portfolio analysis, you can keep track of your assets and make informed investment decisions.

## Features

- **Add and Remove Stocks**: Easily manage your stock investments by adding or removing stocks from your portfolio.
- **Real-Time Data**: Fetch current stock prices using the Yahoo Finance API to ensure your portfolio reflects the latest market conditions.
- **Portfolio Tracking**: Calculate and display the total value of your portfolio, including individual stock performance metrics.
- **Historical Data Visualization**: Plot and analyze historical portfolio values to understand performance trends over time.
- **Persistent Storage**: Save and load your portfolio data from a JSON file for consistent tracking across sessions.

## Technologies Used

- **Python**: The core programming language used for application logic.
- **Yahoo Finance API**: For retrieving real-time stock data.
- **Matplotlib**: To visualize historical data through plots.
- **Pandas**: For data manipulation and analysis.

## Getting Started

To get a local copy up and running, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Akii017/Stock-portfolio-tracker.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd Stock-portfolio-tracker
   ```

3. **Install Required Packages**:

   Ensure you have Python installed. Then, install the necessary packages using pip:

   ```bash
   pip install yfinance pandas matplotlib
   ```

4. **Run the Application**:

   Execute the main script to start the tracker:

   ```bash
   python stock_portfolio_tracker.py
   ```

## Usage

1. **Adding Stocks**:

   - Input the stock symbol (ticker) and the number of shares you own.
   - The application will fetch the current price and add the stock to your portfolio.

2. **Removing Stocks**:

   - Select the stock you wish to remove from your portfolio.
   - Confirm the removal to update your holdings.

3. **Viewing Portfolio**:

   - The application displays a summary of your current holdings, including:
     - Stock symbols
     - Number of shares
     - Current price
     - Total value per stock
     - Overall portfolio value

4. **Visualizing Historical Data**:

   - Generate plots to visualize the performance of individual stocks or the entire portfolio over time.
   - Analyze trends to make informed investment decisions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, please contact:

- **Name**: Akhil Vijayan
- **Email**: akhilv172004@gmail.com

---

Thank you for using the Stock Portfolio Tracker! We hope this tool assists you in effectively managing your investments. 
**Note : Still Under development .**
