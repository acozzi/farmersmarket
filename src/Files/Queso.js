import React from 'react';
import {Link} from "react-router-dom";

function Quesos({datos,id}){

    return(
        <div>
            <div>{datos.tipo}</div>
            <div>{datos.comentario}</div>
            <Link to={'producto/'+id}>Ver Producto</Link>
        </div>
    )
}

export default Quesos;