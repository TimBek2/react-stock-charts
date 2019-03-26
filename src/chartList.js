import React from 'react';
import StockChart from './StockChart';

const ChartList = (props) => {
  return (
    <div className="charts-wrapper">
      <h4>Stock Charts</h4>

      { props.tickers.length > 0 &&
        props.tickers.map(ticker =>
          <StockChart key={ticker} ticker={ticker} />
        )
      }
    </div>
  )
}

export default ChartList;
