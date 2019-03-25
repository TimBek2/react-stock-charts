import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class StockTickerForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { stockTicker: '' }
  }

  render() {
    const {handleSubmit} = this.props;
    const handleChange = (e) => {
      this.setState({ stockTicker: e.target.value })
    }

    return (
      <div>
        <h5>Gimme a stock ticker</h5>

        <form onSubmit={(e) => handleSubmit(e, this.state.stockTicker)}>
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
