import React, {Component} from 'react';
import firebase from '../Config/firebase';
import {withRouter} from 'react-router-dom';

class Logout extends Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        firebase.auth().signOut().then(()=> {
            console.log('Sesion Cerrada');
            //const {history} = this.props;
            //history.push('/');
          }).catch(function(error) {
            console.log('ERROR en el cierre de sesion')
          });
    }

 
    render(){
        return(
            <div>
                <form onClick={this.onClick}>
                    <button type="button">Cerrar Sesión</button>
                </form>
            </div>

        )
    }
}
export default withRouter(Logout);