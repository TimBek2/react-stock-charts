import React, { Component } from 'react';
import StockTickerForm from './StockTickerForm';
import ChartList from './chartComponents/ChartList';

export default class StockCharts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTicker: '',
      tickers: []
    }
  }

  handleTickerUpdate = (value) => {
    this.setState({ newTicker: value })
  }

  handleTickerSubmit = (e, value) => {
    e.preventDefault();

    this.setState({ tickers: [...this.state.tickers, value], newTicker: '' })
  }

  render() {

    return (
      <div>
        <div className='content'>
          <h1 className='header'>Stock Charts App</h1>
          <StockTickerForm
            handleSubmit={this.handleTickerSubmit}
            handleTickerUpdate={this.handleTickerUpdate}
            stockTicker={this.state.newTicker} />
          <ChartList
            tickers={this.state.tickers}
          />
        </div>

        <footer className='footer'>Built for dad</footer>
      </div>
    )
  }
}
