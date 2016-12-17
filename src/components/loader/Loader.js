import React, { Component } from 'react';
import './Loader.css';
import loader from './Loader.gif';

class Loader extends Component {

  render() {

    return (
      <div className="loader">
        <img src={loader} alt="Loading..."/>
      </div>
    );
  }
}

export default Loader;