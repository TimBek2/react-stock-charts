import React, { Component } from 'react';

export default class StockTickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = { stockTicker: '' }
  }

  render() {
    const handleChange = (e) => {
      this.setState({ stockTicker: e.target.value })
      console.log('State:', this.state);
    }

    const handleSubmit = () => {
      console.log('State on submit:', this.state);
    }

    return (
      <div>
        <h3>Gimme a stock ticker</h3>
        <p>
          If you need help finding a ticker, try looking <a href="https://finance.yahoo.com/lookup/">here</a>
        </p>

        <form onSubmit={handleSubmit}>
          <label>Ticker Symbol:
            <input type="text" onChange={handleChange} />
          </label>
          <input type="submit" value="Enter" />
        </form>
      </div>
    )
  }
}
