import React, { Component } from 'react';

import {connect} from 'react-redux';
import {login, setCurrentUser} from '../actions/loginActions';
import {bindActionCreators} from 'redux';
import { ListGroup, FormGroup, FormControl } from 'react-bootstrap';

import LoginForm from '../components/sessions/form'

class CategoriesPage extends Component {
  
  render() {
    const { login, setCurrentUser } = this.props;

    return (
      <LoginForm login={login} setCurrentUser={setCurrentUser} />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({login, setCurrentUser}, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(CategoriesPage);