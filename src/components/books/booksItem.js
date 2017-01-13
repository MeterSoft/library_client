import React, { Component } from 'react';

import { Col, Thumbnail, Button, DropdownButton, MenuItem, ButtonToolbar, Label } from 'react-bootstrap';

class BooksItem extends Component {

  onEditBook() {
    this.props.openBookModal(this.props.book)
  }

  render() {
    const { openBookModal, book } = this.props;

    console.log("----------", book);

    return (
      <Col md={3}>
        <Thumbnail>
          <h3>Name: { book.title }</h3>
          <p>Description: { book.description }</p>
          <p>
            Category: <Label bsStyle="default">{book.category.title}</Label>
          </p>
          <ButtonToolbar>
            <Button href={book.file_url} bsStyle="primary" >Download</Button>
            <DropdownButton bsStyle="link" title="Options" id="book-options" >
              <MenuItem eventKey="1" onSelect={this.onEditBook.bind(this)}>Edit</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4" disabled={true}>Delete</MenuItem>
            </DropdownButton>
          </ButtonToolbar>
        </Thumbnail>
      </Col>
    );
  }
}

export default BooksItem;