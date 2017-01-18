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
        <NavItem eventKey={4}>Login</NavItem>
      </LinkContainer>
    );

    return (

      <Navbar>
        <Navbar.Header>
          { isAuthenticated && 
            <Nav>
              <IndexLinkContainer to="/charts">
                <NavItem eventKey={1}>Charts</NavItem>
              </IndexLinkContainer>
              <LinkContainer to="/categories">
                <NavItem eventKey={2}>Categories</NavItem>
              </LinkContainer>
              <LinkContainer to="/books">
                <NavItem eventKey={3}>Books</NavItem>
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