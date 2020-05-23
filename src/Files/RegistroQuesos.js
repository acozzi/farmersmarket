import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import firebase from '../Config/firebase'

function RegistroQuesos(){
    const history = useHistory();
    const [form, setForm] = useState({
        tipo:'',
        foto:'',
        maduracion:'',
        precio:'',
        presentacion:'',
        comentario:''
    });
    function handleClick(){
        
        history.push("/");
    }
    function handleSubmit(e){
        firebase.db.collection("productos").add({
            tipo: form.tipo,
            foto: form.foto,
            maduracion: form.maduracion,
            precio: form.precio,
            presentacion: form.presentacion,
            comentario: form.comentario
            
            })
            .then((data)=>{
                console.log(data)
                alert(data.tipo,' Registrado');
                history.push("/registroq");
            })
            .catch((err)=>{
            console.log(err)
            })

        
        e.preventDefault();
    }
    function handleChange(e){

        const target = e.target;
        const value = target.value;
        const name = target.name;

      
        setForm({
            ...form,
            [name] : value});
        
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Tipo</label>
                        <input type="text" name="tipo" value={form.tipo} onChange={handleChange}></input>
                </div>
                    <div>
                        <label>Foto</label>
                        <input type="text" name="foto" value={form.foto} onChange={handleChange} ></input>
                    </div>
                    <div>
                        <label>Maduración</label>
                        <input type="text" name="maduracion" value={form.maduracion} onChange={handleChange} ></input>
                    </div>
                    <div>
                        <label>Precio</label>
                        <input type="number" name="precio" value={form.precio} onChange={handleChange} ></input>
                    </div>   
                    <div>
                        <label>Presentacion</label>
                        <input type="text" name="presentacion" value={form.presentacion} onChange={handleChange} ></input>
                    </div>    
                    <div>
                        <label>Comentario</label>
                        <input type="text" name="comentario" value={form.comentario} onChange={handleChange} ></input>
                    </div>
               
                <button type="submit">Registrarme</button>
            </form>
            <button onClick={handleClick} >Ir a home</button>
        </div>
    )
}

export default RegistroQuesos;




/*

class RegistroQuesos extends Component{
    constructor(){
        super();
        this.state = {
            tipo:'',
            foto:'',
            maduracion:'',
            precio:'',
            presentacion:'',
            comentario:''  
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e){
        console.log(this.state);    
        firebase.db().collection("productos").add({
            tipo: this.state.tipo,
            foto: this.state.foto,
            maduracion: this.state.maduracion,
            precio: this.state.precio,
            presentacion: this.state.presentacion,
            comentario:this.state.comentario
        }
            
        );
        e.preventDefault();
    
        firebase.auth.createUserWithEmailAndPassword(email, password)
        .then((data)=>{
            console.log("Usuario creado",data.user.uid)
            firebase.db.collection("productos").add({
                nombre: form.nombre,
                apellido: form.apellido,
                email: form.email,
                userId: data.user.uid
              })
              .then((data)=>{
                  console.log(data)
                  //history.push("/login");
              })
              .catch((err)=>{
                console.log(err)
                })
        })
        .catch((error)=>{
            console.log("Error",error)
        })
        e.preventDefault();
     
    }
    handleChange(e){
        const target = e.target;
        const value = target.value === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState(
            {[name]: value}
        ); 
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Tipo</label>
                        <input type="text" name="tipo" value={this.state.tipo} onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Foto</label>
                        <input type="text" name="foto" value={this.state.foto} onChange={this.handleChange} ></input>
                    </div>
                    <div>
                        <label>Maduración</label>
                        <input type="text" name="maduracion" value={this.state.maduracion} onChange={this.handleChange} ></input>
                    </div>
                    <div>
                        <label>Precio</label>
                        <input type="number" name="precio" value={this.state.precio} onChange={this.handleChange} ></input>
                    </div>   
                    <div>
                        <label>Presentacion</label>
                        <input type="text" name="presentacion" value={this.state.presentacion} onChange={this.handleChange} ></input>
                    </div>    
                    <div>
                        <label>Comentario</label>
                        <input type="text" name="comentario" value={this.state.comentario} onChange={this.handleChange} ></input>
                    </div>
                    <button type="submit">Registrarme</button>
                </form>
            </div>
        )
    }
}

export default RegistroQuesos;

*/