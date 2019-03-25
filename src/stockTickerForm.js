import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class StockTickerForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleTickerUpdate: PropTypes.func.isRequired,
    stockTicker: PropTypes.string
  }

  render() {
    const {handleSubmit, handleTickerUpdate} = this.props;

    return (
      <div>
        <h5>Gimme a stock ticker</h5>

        <form onSubmit={(e) => handleSubmit(e, this.props.stockTicker)}>
          <label>Ticker Symbol:
            <input type="text" value={this.props.stockTicker} onChange={(e) => handleTickerUpdate(e.target.value)} />
          </label>
          <input type="submit" value="Enter" />
        </form>

        <p>
          If you need help finding a ticker, try looking <a href="https://finance.yahoo.com/lookup/">here</a>
        </p>
      </div>
    )
  }
}
