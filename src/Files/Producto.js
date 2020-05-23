import React, {useState, useEffect} from 'react';
import firebase from '../Config/firebase'
import { useHistory } from "react-router-dom";
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
    return(
        <div>
            <ul>
                <li>
                    <h1>Tipo {datos.tipo}</h1>            
                    <h3>Precio: {datos.precio}</h3>
                    <h3>Maduración: {datos.maduracion}</h3>
                    <h3>Presentación: {datos.presentacion}</h3>
                    <img src={datos.foto} className="App-foto" alt={datos.tipo} width="30%" />
                    <h2>Descripción: {datos.comentario}</h2>
                    
                </li>
            </ul>
         </div>
    )
}

export default Producto;