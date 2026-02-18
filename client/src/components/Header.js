import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar variant="dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              ➕ V-Church HQ Nairobi
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/members">
                <Nav.Link>Members</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/registration">
                <Nav.Link>Registration</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/admin">
                <Nav.Link>Admin</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
