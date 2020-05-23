import React, {Component} from 'react';
import firebase from '../Config/firebase';
import {withRouter} from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props);
        console.log(this.props.title);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email:'',
            password:''
        }
    }
    handleSubmit(event){
        firebase.auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(()=>{
            console.log('Login');
            const {history} = this.props;
            history.push('/registroq');
        })
        .catch(error=>{
            console.log('Error: ',error);
        });
        event.preventDefault();
    }
    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]:value
        })
        event.preventDefault();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Emailo</label>
                        <input type="email" name="email" value={this.state.usuario} onChange={this.handleChange} ></input>

                    </div>
                    <div>
                        <label>Contraseña</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} ></input>

                    </div>
                    <button type="submit">Ingresar</button>
                </form>
            </div>

        )
    }
}
export default withRouter(Login);