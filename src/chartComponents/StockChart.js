import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ALPHA_VANTAGE_API_KEY } from '../lib/constants';
import request from 'axios';

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
      request.get(Api).then(res => {
        if(!res.data['Error Message']) {
          const fetchedData = {
            ticker: ticker,
            // data comes in reverse chronological order, so the earliest is the last
            first: res.data['Time Series (5min)'][Object.keys(res.data['Time Series (5min)'])[Object.keys(res.data['Time Series (5min)']).length - 1]],
            last: res.data['Time Series (5min)'][Object.keys(res.data['Time Series (5min)'])[0]]
          }
          this.setState({ data: fetchedData });
        } else {
          this.setState({ data: { error: res.data['Error Message']}})
        }
      })
    }
  }

  render() {
    if(this.state.data.ticker) {
      return (
        <div className='chart-wrapper'>
          <p>Ticker: {this.state.data.ticker}</p>
          <p>First Trade Opening Price: {this.state.data.first['1. open']}</p>
          <p>Last Trade Opening Price: {this.state.data.last['1. open']}</p>
        </div>
      )
    } else if(this.state.data.error) {
      console.log(this.state.data.error)
      return (
        <div className='error-wrapper'>
          <p>There was a problem with that ticker</p>
          <p>Please double check that it was accurate and try again</p>
        </div>
      )
    } else {
      return (<p>Nothing here yet</p>)
    }


  }
}
