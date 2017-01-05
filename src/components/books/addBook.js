import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import BookForm from './form';

class AddBook extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {

    return (
      <div>        
        <Button
          bsStyle="primary"
          bsSize="small"
          onClick={this.open.bind(this)}
        >
          Add book
        </Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Add Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <BookForm createBook={this.props.createBook} onCreateBook={this.close.bind(this)} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddBook;