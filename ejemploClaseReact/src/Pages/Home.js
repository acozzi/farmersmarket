import React,{Component} from 'react';
import Perfil from '../Components/Perfil'
import firebase from '../Config/firebase'
import NetContext from '../Context/NetContext';
import {Link} from "react-router-dom";
import { Container,Col,Row,Spinner,Alert } from 'react-bootstrap';
import '../App.css';
class Home extends Component{
    static contextType = NetContext
    constructor(){
        super()
        this.state={
            perfiles:[],
            isLoaded:false
        }
    }
    componentDidMount(){
        if(this.context.login){
            firebase.db.collection("usuarios")
            .get()
            .then(querySnapshot=>{
                console.log("dsads",querySnapshot.docs)
                this.setState({
                    perfiles:querySnapshot.docs,
                    isLoaded:true
                })
                
                
            })
        }
        
    }
    render(){
        if(!this.context.login){
            return (
                <Container>
                    <Alert variant={'info'}>
                        Debe autenticarse en el sistema    
                        <Link to={'/login'}>Ir a login</Link>        
                    </Alert>
                        
                </Container>
            )
        }else if(!this.state.isLoaded){
            return (
                <Container className="loader">

                    <Spinner  animation="grow" />
                    <Spinner  animation="grow" />
                    <Spinner  animation="grow" />                
                </Container>
            )
        }else{
            return(
                <Container>
                    <Row>
                        
                        {this.state.perfiles.map((doc)=><Col xs={6} key={doc.id}><Perfil datos={doc.data()} id={doc.id} context={this.context}/></Col>)}
                        
                    </Row>
                    
                    
                </Container>
            )
        }
        
    }
}

export default Home;