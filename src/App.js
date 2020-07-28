import React,{Component} from 'react';
import './App.css';
import Home from './Files/Home';
import Registro from './Files/Registro';
import RegistroQuesos from './Files/RegistroQuesos';
import Menu from './Files/Menu';
import Producto from './Files/Producto';
import Carrito from './Files/Carrito';
import Login from './Files/Login';
import { BrowserRouter, Route} from "react-router-dom";
import Logout from './Files/Logout';

  
class App extends Component{
    constructor(){
        super()
        console.log('App Inicializada');
    }
    
    render(){

        return (
            <div className="App">
                
                
                <BrowserRouter>
                    <Route  component={Menu} />
                    <Route path="/" exact  component={Home} />
                    <Route path="/login" exact  component={()=> <Login title={'test'} />} />
                    <Route path="/logout" exact  component={()=> <Logout title={'test'} />} />
                    <Route path="/registro" exact  component={Registro} />
                    <Route path="/vercarrito" exact  component={Carrito} />
                    <Route path="/producto/:id" exact  component={Producto} />
                    <Route path="/registroq" exact  component={RegistroQuesos} />

                    
                </BrowserRouter>
            </div>
        );
    }
}

export default App;