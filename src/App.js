import React,{Component} from 'react';
import './App.css';
import Home from './Files/Home';
import Registro from './Files/Registro';
import RegistroQuesos from './Files/RegistroQuesos';
import Menu from './Files/Menu';
import Producto from './Files/Producto';
import Login from './Files/Login';
//import DetallePerfil from './Files/DetallePerfil';
import { BrowserRouter, Route} from "react-router-dom";
import Logout from './Files/Logout';
import MarketContext from './Context/MarketContext';



  
class App extends Component{
    state = {
        carrito : []
    }
    /*
    constructor(){
        super()
        // Initialize Firebase
        
    }*/
    componentDidMount(){
        this.setState({
            carrito:['item1','item2']
        });
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
                    <Route path="/producto/:id" exact  component={Producto} />
                    <Route path="/registroq" exact  component={RegistroQuesos} />

                    
                </BrowserRouter>
            </div>
        );
    }
}

export default App;


/**
 * <MarketContext.Provider>
                    value = {{
                        state: this.state.carrito
                    }}
                </MarketContext.Provider>
 */