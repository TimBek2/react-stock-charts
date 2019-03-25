import React, { Component } from 'react';
import './App.scss';
import StockTickerForm from './stockTickerForm';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Stock Charts App</h1>
        <StockTickerForm />
        <footer className="footer">Built for dad</footer>
      </div>
    );
  }
}

export default App;
