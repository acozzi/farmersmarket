import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import firebase from '../Config/firebase'
import { Card,Form,Button,Spinner } from 'react-bootstrap';

const Registro = ()=>{
    const history = useHistory();
    const [form, setForm] = useState({nombre:'',apellido:'',email:'',password:''});
    const [spinner, setSpinner] = useState(false);
    
    const handleSubmit = (e)=>{
        setSpinner(true);
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
                    setSpinner(false);
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
    const handleChange = (e)=>{

        const target = e.target;
        const value = target.value
        const name = target.name;

      
        setForm({
            ...form,
            [name] : value});
        
    }
    return(
        <Card style={{ width: '80%', margin:'auto' }}>
                <Card.Body>
                <Card.Title>Registrarse</Card.Title>
                
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Ingresar nombre" name="nombre" value={form.usuario} onChange={handleChange} />
                            
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Ingresar apellido" name="apellido" value={form.usuario} onChange={handleChange} />
                            
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" value={form.usuario} onChange={handleChange} />
                            
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" value={form.password} onChange={handleChange} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            {
                                spinner && 
                                <Spinner animation="border" variant="light" size="sm" />
                            }
                            Registrarse
                        </Button>
                    </Form>
                        
                
                    
                </Card.Body>
            </Card>
        
    )
}

export default Registro;


