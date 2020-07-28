import React from 'react';
import {Link} from "react-router-dom";
import {Nav,Navbar,FormControl,NavDropdown,Form,Button} from 'react-bootstrap';
function Menu(){
    return(

        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Farmers Market</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">
                <Link to={'/'}>Home</Link>
            </Nav.Link>
            <Nav.Link href="#link">
                <Link to={'/vercarrito'}>🛒</Link>
            </Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Link to={'/registro'}>Registro</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link to={'/login'}>Login</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <Link to={'/logout'}>Cerrar Sesión</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                <Link to={'/registroq'}>Registro de Quesos</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Brand href="#home">{localStorage.getItem('login')}</Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>
       
    )
}
export default Menu;