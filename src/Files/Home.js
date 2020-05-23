import React,{Component} from 'react';
import firebase from '../Config/firebase'
import Queso from '../Files/Queso';


class Home extends Component{
    constructor(){
        super()
        this.state={
            perfiles:[],
            isLoaded:false
        }
    }
    componentDidMount(){
        if(localStorage.getItem("login")){
            firebase.db.collection("productos")
            .get()
            .then(querySnapshot=>{
                console.log("Cargar Productos",querySnapshot.docs)
                this.setState({
                    perfiles:querySnapshot.docs,
                    isLoaded:true
                })
                
                
            })
        }
        
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
                    {this.state.perfiles.map((doc)=>
                        <Queso datos={doc.data()} id={doc.id}/>)
                    }
                    
                </div>
            )
        }
        
    }
}

export default Home;