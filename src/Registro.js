import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import firebase from './../src/Config/firebase';
function Registro(){
    const history = useHistory();
    const [form, setForm] = useState({nombre:'',email:'',password:''});
    function handleClick(){
        history.pushState('/');
    }
    function handleSubmit(event){
        let email = form.email;
        let password = form.password;
        firebase.auth.createUserWithEmailAndPassword(email,password)
        .then((data)=>{
            console.log("Usuario Creado", data.user.uid)
            firebase.db.collection('usuarios').add({
                nombre: form.nombre,
                email:form.email,
                userId: data.user.uid
            })
            then((data)=>{
                console.log(data)
                console.log('Redirigir a login')
                //history.push('/login');
            })
            .catch((error)=>{
                console.log('Error: ',error)
            })    
        })
        .catch((error)=>{
            console.log("Error", error)
        })
        event.preventDefault();
    }
    function handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

    }
    


}

export default Registro;

/*
class Registro extends Component {
    constructor(props){
        super(props);
        this.state = {
            nombre: '',
            email: '',
            password: ''
        }
    }
    handleSubmit(event){
        let email=this.state.email;
        let password=this.state.password;
        firebase.auth.createUserWithEmailAndPassword(email,password)
        .then(()=>{
            console.log('Usuario Creado')
        })
        .catch((error)=>{
            console.log('Error',error)
        })
        event.preventDefault();
    }
    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                       
                        <label>Nombre</label>
                    
                       
                        <input type="text" placeholder="Introduzca su nombre" name="nombre" value={this.state.nombre} onChange={this.handleChange.bind(this)} />
                       
                        
                        <input type="email" placeholder="Introduzca su email" name="email" value={this.state.email} onChange={this.handleChange.bind(this)} />
                        
                     
                        <input type="password" placeholder="Introduzca su contraseña" name="password" value={this.state.password} onChange={this.handleChange.bind(this)} />

                        <input type="submit" value="Submit" />
                    </div>

                </form>
            </div>
        );
    }
}
export default Registro;

*/