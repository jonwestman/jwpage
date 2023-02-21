import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export const NavbarComponent = (props) => {
    return (
        <Navbar display="flex"  bg="dark" variant="dark" expand="sm" className="pb-3">
        <Container>
          <Navbar.Brand>Reidar Nilsen</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/cv">Cv</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}