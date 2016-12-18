import React, { Component } from 'react';

import { Jumbotron } from 'react-bootstrap';

class Home extends Component {

  render() {

    return (
      <div>
        <Jumbotron>
          <h2>Example app on React</h2>
          <ul>
            <li>Display list of book`s categories</li>
          </ul>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;