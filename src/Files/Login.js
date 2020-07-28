import React, {Component} from 'react';
import firebase from '../Config/firebase';
import {withRouter} from 'react-router-dom';
import {Form, Col, Button} from 'react-bootstrap';

class Login extends Component{
    constructor(props){
        super(props);
        //console.log(this.props.title);
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
            console.log('Login Successful');
            localStorage.setItem('login',this.state.email);
            const {history} = this.props;
            history.push('/');
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
            <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={this.state.usuario} onChange={this.handleChange} placeholder="Ingrese su email" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
          
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
              </Form.Group>
            </Form.Row>
        
            <Button variant="primary" type="submit">
              Ingresar
            </Button>
          </Form>

        )
    }
}
export default withRouter(Login);