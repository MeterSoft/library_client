import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';
import { SubmissionError } from 'redux-form'
import Input from '../Input'
import AlertError from '../error'

class BookForm extends Component {

  save(params) {
    const { bookModal, categories } = this.props; 

    if (!params.category_id) params.category_id = categories.data[0].id
    return bookModal.book.id ? this.updateBook(params) : this.createBook(params)
  }

  afterSuccessSave() {
    const { updateBookList, reset, closeBookModal } = this.props;

    reset();
    closeBookModal();
    updateBookList(); 
  }

  createBook(params) {
    const { createBook } = this.props;

    return createBook(params).then((payload) => {
      this.afterSuccessSave();
    }).catch((error) => {
      throw new SubmissionError({ ...error, _error: "Please, resolve problems" });
    });
  }

  updateBook(params) {
    const { updateBook } = this.props;

    return updateBook(params).then((payload) => {
      this.afterSuccessSave();
    }).catch((error) => {
      throw new SubmissionError({ ...error, _error: "Please, resolve problems" });
    });
  }

  render() {
    const { error, handleSubmit, pristine, reset, submitting, categories, bookModal, closeBookModal } = this.props;
    const { book } = bookModal;

    return (
      <div>
        <form>
          <Modal show={bookModal.isOpen} onHide={closeBookModal}>
            <Modal.Header closeButton>
              <Modal.Title>
                {
                  book.id ? "Update book" : "Add book"
                }
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>            
              {error && <AlertError error={error}/>}

              <Field name="title" component={Input} label="Title" type="text" />
              <Field name="description" component={Input} label="Description" componentClass="textarea" />
              {
                !book.id && <Field name="file" component={Input} label="File" type="file" />
              }
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
                <Button type="button" onClick={closeBookModal}  >
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
  enableReinitialize: true,
})(BookForm);

  
export default BookForm;
