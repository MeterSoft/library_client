import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, ButtonToolbar, Col } from 'react-bootstrap';
import { SubmissionError } from 'redux-form'
import Input from '../Input'
import AlertError from '../error'
import setAuthorizationToken from '../../api/setAuthorizationToken'
import { browserHistory } from 'react-router'

class BookForm extends Component {

  save(data) {
    const {login, setCurrentUser, reset} = this.props; 

    return login(data).then((payload) => {
      const { access_token, user } = payload;

      localStorage.setItem("access_token", JSON.stringify(payload))
      setAuthorizationToken(access_token);
      setCurrentUser(user);
      browserHistory.push('/charts');

    }, (error) => {
      throw new SubmissionError({ ...error, _error: "Please, resolve problems" })
    });
  }

  render() {
    const { error, handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <Col xs={6} md={4} xsOffset={3}>
        <p>Login: admin</p>
        <p>Password: admin</p>
        <form>
          <Field name="username" component={Input} label="UserName" type="text" />
          <Field name="password" component={Input} label="Password" type="password" />
          <Button type="submit" onClick={handleSubmit(this.save.bind(this))} disabled={submitting} >
            Submit
          </Button>
        </form>
      </Col>
    );
  }
}

// Decorate the form component
BookForm = reduxForm({
  form: 'login',
  fields: ['username', 'password'],
})(BookForm);

export default BookForm;
