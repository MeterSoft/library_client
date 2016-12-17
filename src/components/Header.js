import React, { Component } from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

class Header extends Component {

  render() {

    return (
      <Navbar>
        <Navbar.Header>
          <Nav>
            <IndexLinkContainer to="/">
              <NavItem eventKey={1}>Home</NavItem>
            </IndexLinkContainer>
            <LinkContainer to="categories">
              <NavItem eventKey={2}>Categories</NavItem>
            </LinkContainer>
            <LinkContainer to="video">
              <NavItem eventKey={3}>Video</NavItem>
            </LinkContainer>
            <LinkContainer to="audio">
              <NavItem eventKey={4}>Audio</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default Header;