import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import DevTools from './containers/devTools';

class App extends Component {
  
  render() {

    return (
      <div className="App">
        <Header />
        <div className="container">
          {this.props.children}
        </div>
        <DevTools />
      </div>
    );
  }
}

export default App;