import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';
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
    const {createBook, updateBookList, reset, categories} = this.props; 

    if (!data.category_id) data.category_id = categories.data[0].id

    return createBook(data).then((payload) => {
      reset();
      this.close();
      updateBookList();
    }, (error) => {
      console.log("++++++++++++++++++++++++", error);
      throw new SubmissionError({ ...error.error, _error: "Please, resolve problems" })
    });
  }

  render() {
    const { error, handleSubmit, pristine, reset, submitting, categories } = this.props;

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
              <Field name="category_id" component={Input} label="Category" componentClass="select">
                {
                  categories.data.map((category) => {
                    return <option key={category.id} value={category.id}>{category.title}</option>
                  })
                }
              </Field>
            </Modal.Body>
            <Modal.Footer>
              <ButtonToolbar>
                <Button type="submit" onClick={handleSubmit(this.save.bind(this))} disabled={submitting} >
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
  fields: ['title', 'description', 'file', 'category_id'],
})(BookForm);

export default BookForm;
