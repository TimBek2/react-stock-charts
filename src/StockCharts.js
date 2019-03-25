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

  render() {
    const handleTickerSubmit = (e) => {
      e.preventDefault();

      // this.setState({})
      console.log('State on submit:', this.state);
    }

    return (
      <div className="content">
        <h1 className="header">Stock Charts App</h1>
        <StockTickerForm
          handleSubmit={handleTickerSubmit}/>
        <ChartList
          tickers={this.state.tickers}
        />
        <footer className="footer">Built for dad</footer>
      </div>
    )
  }
}
