import React, {useState, useEffect} from 'react';
import firebase from '../Config/firebase'
import { useHistory } from "react-router-dom";
import {Card, Button} from 'react-bootstrap';
function Producto(props){
    const history = useHistory();

    const [datos, setDatos] = useState({});
    useEffect(
        () => {
            const id = props.match.params.id;
            firebase.db.doc("productos/"+id)
            .get()
            .then(doc=>{
                setDatos( doc.data() )
                console.log(doc.data())
            })
    }, []); 
    function handleClick(){
        let cantidad = 1;
        console.log('Sumar al carrito');
        if(localStorage.getItem(datos.sku)!=null){
            console.log('El producto ya existe, sumar otro');
            cantidad = parseInt(localStorage.getItem(datos.sku));
            cantidad++;
            localStorage.setItem(datos.sku,cantidad);
        } else {
            console.log('Primer compra, sumar al carrito');
            localStorage.setItem(datos.sku,cantidad);
        }
        
    }
    return(
        <Card style={{ width: '28rem' }}>
    <Card.Img variant="top" src={datos.foto} />
    <Card.Body>
      <Card.Title>{datos.tipo}</Card.Title>
      <Card.Text>
            <h5>Precio: ${datos.precio},00</h5>
            <h5>Maduración: {datos.maduracion}</h5>
            <h5>Presentación: {datos.presentacion}</h5>
            <h5>SKU: {datos.sku}</h5>
            <h5>Descripción: {datos.comentario}</h5>
      </Card.Text>
      <Button variant="primary" onClick={handleClick}>Sumar al Carrito</Button>
    </Card.Body>
  </Card>
    )
}

export default Producto;