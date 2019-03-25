import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { ALPHA_VANTAGE_API_KEY } from './lib/constants';

export default class StockChart extends Component {
  static propTypes = {
    ticker: PropTypes.string
  }

  render() {
    const {ticker} = this.props;
    if (ticker) {
      return(
        <p>{ticker}</p>
      )
    } else {
      return null
    }
  }
}
