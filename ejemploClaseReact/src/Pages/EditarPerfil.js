import React, {useState, useEffect} from 'react';
import firebase from '../Config/firebase'
import { useHistory } from "react-router-dom";
function EditarPerfil(props){
    const history = useHistory();

    const [datos, setDatos] = useState({});
    useEffect(
        () => {
            const id = props.match.params.id;
            firebase.db.doc("usuarios/"+id)
            .get()
            .then(doc=>{
                setDatos( doc.data() )
                console.log(doc.data())
            })
    }, []); 
    const handleClick = ()=>{
        const id = props.match.params.id;
        firebase.db.doc("usuarios/"+id)
        .delete()
        .then(doc=>{
            console.log(doc)
            history.push("/");
        })
    }
    const handleClickUpdate = ()=>{
        const id = props.match.params.id;
        firebase.db.doc("usuarios/"+id)
        .set({
            nombre:datos.nombre,
            apellido:datos.apellido
        },{merge:true})
        .then(doc=>{
            console.log(doc)
            history.push("/");
        })
    }
    const handleChange = (e)=>{
        const target = e.target;
        const value = target.value
        const name = target.name;

      
        setDatos({
            ...datos,
            [name] : value});
    }  
        
        
        
        
    
    return(
        <div>

            <div>
                <label>Nombre</label>
                <input type="text" name="nombre" value={datos.nombre} onChange={handleChange}></input>
            </div>
            <div>
                <label>Apellido</label>
                <input type="text" name="apellido" value={datos.apellido} onChange={handleChange}></input>
            </div>
            <div>{datos.email}</div>
            <button onClick={handleClick}>Eliminar</button>
            <button onClick={handleClickUpdate}>Actualizar</button>
        </div>
    )
}

export default EditarPerfil;