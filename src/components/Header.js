import React, { Component } from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

class Header extends Component {

  render() {

    return (
      <Navbar>
        <Navbar.Header>
          <Nav>
            <IndexLinkContainer to="/categories">
              <NavItem eventKey={1}>Categories</NavItem>
            </IndexLinkContainer>
            <LinkContainer to="/books">
              <NavItem eventKey={2}>Books</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default Header;