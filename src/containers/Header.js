import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

import { logout } from '../actions/loginActions'

class Header extends Component {

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <NavItem eventKey={4} onClick={this.logout.bind(this)}>Logout</NavItem>
    );

    const guestLinks = (
      <LinkContainer to="/login">
        <NavItem eventKey={3}>Login</NavItem>
      </LinkContainer>
    );

    return (

      <Navbar>
        <Navbar.Header>
          { isAuthenticated && 
            <Nav>
              <IndexLinkContainer to="/categories">
                <NavItem eventKey={1}>Categories</NavItem>
              </IndexLinkContainer>
              <LinkContainer to="/books">
                <NavItem eventKey={2}>Books</NavItem>
              </LinkContainer>
            </Nav>
          }
        </Navbar.Header>
        <Nav pullRight>
          { isAuthenticated ? userLinks : guestLinks }
        </Nav>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state,
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({logout}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);