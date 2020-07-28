import React, { Component } from 'react';
import firebase from '../Config/firebase';
import Resumen from './Resumen';
import {Table, tr,th,thead} from 'react-bootstrap';

class Carrito extends Component{
    constructor(){
        super()
        this.state={
            productos:[],
            carrito:[],
            isLoaded:false
        }
    }
    componentDidMount(){
        if(localStorage.getItem("login")){
            firebase.db.collection("productos")
            .get()
            .then(querySnapshot=>{
                this.setState({
                    productos:querySnapshot.docs,
                    isLoaded:true
                })
            })
        }
    }
    render(){
        return(
            <Table striped bordered hover>
    <thead>
        <tr>
            <th>Cantidad</th>
            <th>Código</th>
            <th>Producto</th>
            <th>Precio Unitario</th>
            <th>Subtotal</th>
        </tr>
    </thead>
    <tbody>
       
        {this.state.productos.map(
            (doc)=>
                <Resumen datos={doc.data()} id={doc.id}/>)}
        
    </tbody>
    <tr>
            <th></th>
            <th></th>
            <th></th>
            <th>Total</th>
            <th>{localStorage.getItem('total')}</th>
        </tr>
  </Table>
        );
    }
}
export default Carrito;