import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import firebase from '../Config/firebase';
import {Form,Col, Button} from 'react-bootstrap';

function Registro(){
    const history = useHistory();
    const [form, setForm] = useState({nombre:'',apellido:'',email:'',password:''});
    function handleClick(){
        history.push("/");
    }
    function handleSubmit(e){
        let email=form.email;
        let password=form.password;    
        firebase.auth.createUserWithEmailAndPassword(email, password)
        .then((data)=>{
            console.log("Usuario creado",data.user.uid)
            firebase.db.collection("usuarios").add({
                nombre: form.nombre,
                apellido: form.apellido,
                email: form.email,
                userId: data.user.uid
              })
              .then((data)=>{
                  console.log(data)
                  history.push("/login");
              })
              .catch((err)=>{
                console.log(err)
                })
        })
        .catch((error)=>{
            console.log("Error",error)
        })
        e.preventDefault();
    }
    function handleChange(e){

        const target = e.target;
        const value = target.value
        const name = target.name;

      
        setForm({
            ...form,
            [name] : value});
        
    }
    return(
        <Form onSubmit={handleSubmit}>
        <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" name="nombre" value={form.usuario} onChange={handleChange} />
            </Form.Group>    
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" name="apellido" value={form.usuario} onChange={handleChange}/>
            </Form.Group>
          </Form.Row>
    
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={form.usuario} onChange={handleChange} placeholder="Ingrese su email" />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" />
          </Form.Group>
        </Form.Row>
    
        <Button variant="primary" type="submit">
          Registrarme
        </Button>
      </Form>
    )
}
export default Registro;