import React, { Component } from 'react';
import StockTickerForm from './StockTickerForm';
import ChartList from './ChartList';

export default class StockCharts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tickers: []
    }
  }

  handleTickerSubmit = (e, value) => {
    e.preventDefault();

    this.setState({ tickers: [...this.state.tickers, value] })
    console.log('State on submit:', this.state);
  }

  render() {

    return (
      <div className="content">
        <h1 className="header">Stock Charts App</h1>
        <StockTickerForm
          handleSubmit={this.handleTickerSubmit}/>
        <ChartList
          tickers={this.state.tickers}
        />
        <footer className="footer">Built for dad</footer>
      </div>
    )
  }
}
