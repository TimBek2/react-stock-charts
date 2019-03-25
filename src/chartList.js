import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { ALPHA_VANTAGE_API_KEY } from './lib/constants';

export default class ChartList extends Component {
  static propTypes = {
    tickers: PropTypes.array
  }

  render() {
    return (
      <h4>Stock Charts</h4>
    )
  }
}
