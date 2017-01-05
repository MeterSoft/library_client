import React, { Component } from 'react';

import { Col, Thumbnail, Button } from 'react-bootstrap';

class BooksItem extends Component {

  render() {

    return (
      <Col md={3}>
        <Thumbnail>
          <h3>{ this.props.title }</h3>
          <p>{ this.props.description }</p>
          <p>
            <Button bsStyle="primary">Download</Button>
          </p>
        </Thumbnail>
      </Col>
    );
  }
}

export default BooksItem;