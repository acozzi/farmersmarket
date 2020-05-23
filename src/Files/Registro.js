import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import firebase from '../Config/firebase'

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
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombres</label>
                    <input type="text" name="nombre" value={form.usuario} onChange={handleChange}></input>
                </div>
                <div>
                    <label>Apellido</label>
                    <input type="text" name="apellido" value={form.usuario} onChange={handleChange}></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={form.usuario} onChange={handleChange}></input>
                </div>
                
                <div>
                    <label>Contraseña</label>
                    <input type="password" name="password" value={form.password} onChange={handleChange}></input>
                </div>
                <button type="submit">Registrarme</button>
            </form>
            <button onClick={handleClick} >Ir a home</button>
        </div>
    )
}

export default Registro;


