import React from 'react';
import {Link} from "react-router-dom";
import NetContext from '../Context/NetContext';
import { Navbar,  Nav,Alert,Container} from 'react-bootstrap';
const Menu = ()=>{
    const mensajeLogin = (context)=>{
        setTimeout(()=>{context.setNewLogin(false)}, 5000)
    }
    return(
        <NetContext.Consumer>
            {context => (
                
                <>
                
                <Navbar bg="light" expand="lg" style={{marginBottom:'10px'}}>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        {!context.login && 
                            <>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/registro">Registro</Nav.Link>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            </>
                        }
                        {context.login && 
                            <>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link onClick={context.logout}>Logout</Nav.Link>
                            </>
                        }
                    
                    
                        
                        
                    </Nav>
                    
                    </Navbar.Collapse>
                </Navbar>
                <Container>
                    
                    {context.newLogin && 
                        <>
                        <Alert variant={'info'}>
                            Bienvenido/a        
                        </Alert>
                        {mensajeLogin(context)}
                        </>
                    }
                    
                </Container>
                </>
                
                
            )}
        </NetContext.Consumer>
        
    )
}

export default Menu;