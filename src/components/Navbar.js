// Third Party Components
import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Header extends React.Component {
    render() {
      return (
        <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#homepage">Wei-ren Murray</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#homepage">Home</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
      );
    }
  }

export default Header