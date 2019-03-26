import React, { Component } from 'react';
import StockCharts from './chartComponents/StockCharts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <StockCharts />
      </div>
    );
  }
}

export default App;
