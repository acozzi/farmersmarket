import React from 'react';
import {Link} from "react-router-dom";
import {Accordion,Card, Button} from 'react-bootstrap';
function Quesos({datos,id}){

    return(
        <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                {datos.tipo}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
                {datos.comentario}
                <p>
                <Link to={'producto/'+id}>Ver Producto</Link>
                </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
            
    )
}

export default Quesos;