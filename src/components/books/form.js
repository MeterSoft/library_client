import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, FormGroup, ButtonToolbar, Modal, Alert } from 'react-bootstrap';
import { SubmissionError } from 'redux-form'
import Input from '../Input'
import AlertError from '../error'

class BookForm extends Component {

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

  save(data) {
    const {createBook, updateBookList, reset} = this.props; 

    return createBook(data).then((payload) => {
      reset();
      this.close();
      updateBookList();
    }, (error) => {
      throw new SubmissionError({ ...error, _error: "Please, resolve problems" })
    });
  }

  render() {
    const { error, handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div>        
        <Button
          bsStyle="primary"
          bsSize="small"
          onClick={this.open.bind(this)}
        >
          Add book
        </Button>

        <form>
          <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
            <Modal.Header closeButton>
              <Modal.Title>Add Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>            
              {error && <AlertError error={error}/>}

              <Field name="title" component={Input} label="Title" type="text" />
              <Field name="description" component={Input} label="Description" componentClass="textarea" />
              <Field name="file" component={Input} label="File" type="file" />
            </Modal.Body>
            <Modal.Footer>
              <ButtonToolbar>
                <Button type="submit" onClick={handleSubmit(this.save.bind(this))}>
                  Submit
                </Button>
                <Button type="button" onClick={reset} disabled={pristine || submitting} >
                  Clear Values
                </Button>
                <Button type="button" onClick={this.close.bind(this)}  >
                  Cencel
                </Button>
              </ButtonToolbar>
            </Modal.Footer>
          </Modal>
        </form>
      </div>

    );
  }
}

// Decorate the form component
BookForm = reduxForm({
  form: 'book',
  fields: ['title', 'description', 'file'],
})(BookForm);

export default BookForm;
