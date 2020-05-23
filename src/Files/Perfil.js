import React from 'react';
import {Link} from "react-router-dom";

function Perfil({datos,id}){

    return(
        <div>
            <div>{datos.nombre}</div>
            <div>{datos.apellido}</div>
            <div>{datos.email}</div>
            <Link to={'detalle-perfil/'+id}>Ver Detalle</Link>
        </div>
    )
}

export default Perfil;