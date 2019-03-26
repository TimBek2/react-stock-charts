import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ALPHA_VANTAGE_API_KEY } from './lib/constants';

export default class StockChart extends Component {
  static propTypes = {
    ticker: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    if (this.props.ticker !== null) {
      const {ticker} = this.props;
      const Api = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&apikey=${ALPHA_VANTAGE_API_KEY}`
      fetch(Api, {
        method: 'GET'
      }).then(res => {
          console.log(res)
        })
      // this.setState({
      //   data: stockData
      // })
    }
  }

  render() {
    return(
      <p>{this.props.ticker}</p>
    )
  }
}
