import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home'
import Registro from './Pages/Registro'
import Menu from './Layout/Menu'
import Login from './Pages/Login'
import DetallePerfil from './Pages/DetallePerfil'
import EditarPerfil from './Pages/EditarPerfil'
import { BrowserRouter, Route} from "react-router-dom";
import GlobalState from './Context/GlobalState';


  
class App extends Component{
    constructor(){
        super()
        // Initialize Firebase
        
    }
    
    render(){

        return (
            
                <GlobalState>
                    <BrowserRouter>
                        <Route  component={Menu} />
                        <Route path="/" exact  component={Home} />
                        <Route path="/login" exact  component={()=> <Login title={'test'} />} />
                        <Route path="/registro" exact  component={Registro} />
                        <Route path="/detalle-perfil/:id" exact  component={DetallePerfil} />
                        <Route path="/editar-perfil/:id" exact  component={EditarPerfil} />
                    </BrowserRouter>
                </GlobalState>
         
        );
    }
}

export default App;
