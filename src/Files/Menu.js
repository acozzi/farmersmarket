import React from 'react';
import {Link} from "react-router-dom";
function Menu(){

    return(
        <div>
            <div><Link to={'/'}>Home</Link></div>
            <div><Link to={'/registro'}>Registro</Link></div> 
            <div><Link to={'/registroq'}>Registro de Quesosooo</Link></div>
            <div><Link to={'/login'}>Login</Link></div>    
            <div><Link to={'/logout'}>Cerrar Sesión</Link></div>    
        </div>
    )
}

export default Menu;