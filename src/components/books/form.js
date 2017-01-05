import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, FormGroup } from 'react-bootstrap';

class BookForm extends Component {


  save(data) {
    const {createBook, onCreateBook, reset} = this.props; 

    return createBook(data).promise.then(() => {
      reset();
      onCreateBook();
    }).catch((error) => {
      alert(error);
      
    });
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (

      <form onSubmit={handleSubmit(this.save.bind(this))}>
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
