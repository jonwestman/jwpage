import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"

// Easter egg nr 1

export const NavbarComponent = (props) => {

  function changeColor(color) {
    document.body.style.background = color;
    //document.body.style.backgroundImage = "url('smiley.gif') blue repeat-x center";
}

function easterEgg_Run(){
    changeColor('red');

}

function easterEggFix_Run(){
    changeColor('white');
}
    return (
        <Navbar display="flex"  bg="dark" variant="dark" expand="sm" className="pb-3">
        <Container>
          <Navbar.Brand onClick={easterEgg_Run} onDoubleClick={easterEggFix_Run}>Jon Westman</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/cv">Cv</Nav.Link>
              <Nav.Link as={NavLink} to="/portfolio">Portfolio</Nav.Link>
              <Nav.Link as={NavLink} to="/aboutme">About me</Nav.Link>
              <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}