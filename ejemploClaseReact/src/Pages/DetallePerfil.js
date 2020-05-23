import React, {useState, useEffect} from 'react';
import firebase from '../Config/firebase'
import { useHistory } from "react-router-dom";
import Perfil from '../Components/Perfil'
import NetContext from '../Context/NetContext';

function DetallePerfil(props){
    const history = useHistory();
    const id = props.match.params.id;
    const [datos, setDatos] = useState({});
    useEffect(
        () => {
            
            firebase.db.doc("usuarios/"+id)
            .get()
            .then(doc=>{
                setDatos( doc.data() )
                console.log(doc.data())
            })
    }, []); 
    const handleClick = ()=>{
        
        firebase.db.doc("usuarios/"+id)
        .delete()
        .then(doc=>{
            console.log(doc)
            history.push("/");
        })
    }
    const handleClickUpdate = ()=>{
        
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
        <NetContext.Consumer>
            {context => (
                <Perfil datos={datos} id={id} context={context} />
            )}
        </NetContext.Consumer>
    )
}

export default DetallePerfil;