import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

import { logout } from '../actions/loginActions'

class Header extends Component {

  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <NavItem eventKey={4} onClick={this.props.logout}>Logout</NavItem>
    );

    const guestLinks = (
      <LinkContainer to="/login">
        <NavItem eventKey={3}>Login</NavItem>
      </LinkContainer>
    );

    return (

      <Navbar>
        <Navbar.Collapse>
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
          <Nav pullRight>
            { isAuthenticated ? userLinks : guestLinks }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { logout })(Header);