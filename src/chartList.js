import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StockChart from './StockChart';


export default class ChartList extends Component {
  static propTypes = {
    tickers: PropTypes.array
  }

  render() {
    const {tickers} = this.props;

    return (
      <div className="tickers-wrapper">
        <h4>Stock Charts</h4>

        { tickers.length > 0 &&
          tickers.map(ticker =>
            <StockChart ticker={ticker} />
          )
        }
      </div>
    )
  }
}
