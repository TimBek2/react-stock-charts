import React, { Component } from 'react';
import './App.scss';
import StockTickerForm from './stockTickerForm';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">Stock Charts</header>
        <StockTickerForm />
      </div>
    );
  }
}

export default App;
