import React, { Component } from 'react';
import Providerfm from './Providerfm';


class MarketContext extends Component {
  state = {
    login: localStorage.getItem('login'),
    dataUser:localStorage.getItem('dataUser'),
    newLogin:false,
    carrito:(localStorage.hasOwnProperty("amigos")?JSON.parse(localStorage.getItem('amigos')):[])
  };

  

  loginUser = dataUser => {
   this.setState({
      login:true,
      dataUser:dataUser,
      newLogin:true
    });
    localStorage.setItem('login',this.state.login)
  };
  logout = ()=>{
    
    this.setState({
      login:false,
      dataUser:null,
      newLogin:false
    })
    localStorage.removeItem('login')
    window.location.href='/'
  }
  setNewLogin = (status)=>{
    this.setState({
      newLogin:status
    })
  }

  setAmigos = (id)=>{
    
    const amigo = this.state.amigos.indexOf(id)
    let arr = this.state.amigos
    if(amigo!=-1){
      
      arr.splice( amigo, 1 );
      this.setState({
        amigos:arr
      })
    }else{
      arr = this.state.amigos.concat([id])
      this.setState({
        amigos:arr
      })
    }
    
    localStorage.setItem('amigos',JSON.stringify(arr))
  } 
  getAmigo = (id)=>{
    return this.state.amigos.indexOf(id)!=-1
  }


  render() {
    return (
      <Providerfm.Provider
        value={{
          login:this.state.login,
          loginUser:this.loginUser,
          logout:this.logout,
          newLogin:this.state.newLogin,
          setNewLogin:this.setNewLogin,
          amigos:this.state.amigos,
          setAmigos:this.setAmigos,
          getAmigo:this.getAmigo
        }}
      >
        {this.props.children}
      </Providerfm.Provider>
    );
  }
}
export default MarketContext;