import React, { Component } from 'react';

export default class StockTickerForm extends Component {
  render() {
    return (
      <div>
        <h3>Gimme a stock ticker</h3>
        <p>
          If you need help finding a ticker, try looking <a href="https://finance.yahoo.com/lookup/">here</a>
        </p>
      </div>
    )
  }
}
