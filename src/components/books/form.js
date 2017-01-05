import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, FormGroup } from 'react-bootstrap';

class BookForm extends Component {


  submitMyForm(data) {
    const {createBook, onCreateBook, resetForm} = this.props; 

    return createBook(data).then(() => {
      resetForm();
      onCreateBook();
      // do other success stuff
    });
  }

  render() {
    console.log("fitst", this.props);

    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (

      <form onSubmit={handleSubmit(this.submitMyForm.bind(this))}>
        <div>
          <label htmlFor="title">Title</label>
          <Field name="title" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <Field name="description" component="textarea" type="text"/>
        </div>
        <div>
          <label htmlFor="file">File</label>
          <Field name="file" component="input" type="file"/>
        </div>
        <button type="submit">Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </form>
    );
  }
}

// Decorate the form component
BookForm = reduxForm({
  form: 'book',
  fields: ['title', 'description'],
})(BookForm);

export default BookForm;
