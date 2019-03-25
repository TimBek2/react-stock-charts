import React, { Component } from 'react';
import { ALPHA_VANTAGE_API_KEY } from './lib/constants'

export default class StockTickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = { stockTicker: '' }
  }

  render() {
    const handleChange = (e) => {
      this.setState({ stockTicker: e.target.value })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('State on submit:', this.state);
      console.log('key:', ALPHA_VANTAGE_API_KEY)
    }

    return (
      <div>
        <h3>Gimme a stock ticker</h3>

        <form onSubmit={handleSubmit}>
          <label>Ticker Symbol:
            <input type="text" onChange={handleChange} />
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
