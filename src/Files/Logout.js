import React, {Component} from 'react';
import firebase from '../Config/firebase';
import {withRouter} from 'react-router-dom';
import {Jumbotron, Button} from 'react-bootstrap';

class Logout extends Component{
    constructor(props){
        super(props);
        /*
        this.state = {
            login: localStorage.getItem('login'),
            dataUser:localStorage.getItem('dataUser'),
            newLogin:false
            
        }*/
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        this.deleteStorage();
        this.setState({
            login:false,
            dataUser:null,
            newLogin:false
          })
        localStorage.removeItem('login');
        

        window.location.href='/';
    }
    
    deleteStorage(){
        for(let i=0;i<Object.entries(localStorage).length;i++){
            localStorage.removeItem(Object.entries(localStorage)[i][0])
        }
    }

 
    render(){
        return(
            <Jumbotron>
                <h1>¿Desea Cerrar Sesión?</h1>
                <p>
                    Perderá los datos que no haya guardado.
                </p>
                <p>
                    <Button variant="primary" onClick={this.onClick}>Salir</Button>
                </p>
  </Jumbotron>



        )
    }
}
export default withRouter(Logout);