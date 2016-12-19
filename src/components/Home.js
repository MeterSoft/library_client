import React, { Component } from 'react';

import { Jumbotron } from 'react-bootstrap';

class Home extends Component {

  render() {

    return (
      <div>
        <Jumbotron>
          <h2>Example app on React</h2>
          <ul>
            <li>Display list of categories books</li>
            <li>Display list of books</li>
            <li>Display list of books by category</li>
            <li>Search categories and books by title</li>
          </ul>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;