import React,{Component} from 'react';
import firebase from '../Config/firebase'
import Queso from '../Files/Queso';
import {Carousel} from 'react-bootstrap';

class Home extends Component{
    constructor(){
        super()
        this.state={
            productos:[],
            isLoaded:false
        }
    }
    componentDidMount(){
        firebase.db.collection("productos")
        .get()
        .then(querySnapshot=>{
            console.log("Cargar Productos",querySnapshot.docs)
            this.setState({
                productos:querySnapshot.docs,
                isLoaded:true
            })
            
            
        })
    }
    render(){
        if(!this.state.isLoaded){
            return (
                <div>
                    Loading...                
                </div>
            )
        }
        else{
            return(
                <div>
                    Productos
                    
                        {this.state.productos.map((doc)=>
                            <Queso datos={doc.data()} id={doc.id}/>)
                        }   
                   
                           
                </div>
            )
        }
        
    }
}

export default Home;