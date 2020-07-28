import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import firebase from '../Config/firebase';
import {Form, Button, Jumbotron} from 'react-bootstrap';

function RegistroQuesos(){
    const history = useHistory();
    const [form, setForm] = useState({
        tipo:'',
        foto:'',
        maduracion:'',
        precio:'',
        presentacion:'',
        comentario:''
    });
    function handleClick(){
        
        history.push("/");
    }
    function handleSubmit(e){
        firebase.db.collection("productos").add({
            tipo: form.tipo,
            foto: form.foto,
            maduracion: form.maduracion,
            precio: form.precio,
            presentacion: form.presentacion,
            comentario: form.comentario
            
            })
            .then((data)=>{
                console.log(data)
                alert(data.tipo,' Registrado');
                history.push("/registroq");
            })
            .catch((err)=>{
            console.log(err)
            })

        
        e.preventDefault();
    }
    function handleChange(e){

        const target = e.target;
        const value = target.value;
        const name = target.name;

      
        setForm({
            ...form,
            [name] : value});
        
    }

    
    if(localStorage.getItem('login')==='acozzzi@gmail.com'){
        return(
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Tipo</Form.Label>
                <Form.Control type="text" name="tipo" value={form.tipo} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Foto</Form.Label>
                <Form.Control type="text" name="foto" value={form.foto} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Maduración</Form.Label>
                <Form.Control type="text" name="maduracion" value={form.maduracion} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" name="precio" value={form.precio} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Presentación</Form.Label>
                <Form.Control type="text" name="presentacion" value={form.presentacion} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Comentario</Form.Label>
                <Form.Control type="text" name="comentario" value={form.comentario} onChange={handleChange} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
    )

    } else {
        return(
            <Jumbotron>
                <h1>Hola {localStorage.getItem('login')}</h1>
                <p>
                    Esta acción está reservada al administrador de la página.
                </p>
                
            </Jumbotron>
        )
    }
}

export default RegistroQuesos;