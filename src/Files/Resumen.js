import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {tr,Button} from 'react-bootstrap';

class Resumen extends Component{
    constructor(props){
        super(props);
        if(localStorage.getItem(this.props.datos.sku)==null){
            localStorage.setItem(this.props.datos.sku,0);
        } 
        this.state = {
            cantidad: parseInt(localStorage.getItem(this.props.datos.sku))
        }   
        this.handleClickSuma = this.handleClickSuma.bind(this);
        this.handleClickResta = this.handleClickResta.bind(this);
    }
    
    handleClickSuma(){
        this.setState((state) => {
            return {
                cantidad: this.state.cantidad + 1
            };
          });
        localStorage.setItem(this.props.datos.sku,this.state.cantidad);        
    }
    handleClickResta(){
        if(this.state.cantidad<1){
            alert('El pedido no puede ser negativo');

        } else {
            this.setState((state) => {
                return {
                    cantidad: this.state.cantidad - 1
                };
            });
            localStorage.setItem(this.props.datos.sku,this.state.cantidad); 
        }
    }
    
    
    render(){
        return(
            <tr>
                <td>
                    {this.state.cantidad}
                    
                    {' '}{' '}<Button variant="outline-secondary" onClick={this.handleClickResta}>-</Button>{' '}
                    <Button variant="outline-primary" onClick={this.handleClickSuma}>+</Button>
                    
                </td>
                <td>
                    {this.props.datos.sku}
                </td>
                <td>
                    {this.props.datos.tipo}
                </td>
                
                <td>
                    {this.props.datos.precio}
                </td>
                <td>
                    {this.state.cantidad * this.props.datos.precio}
                </td>
           </tr>
        )
    }

}
export default Resumen;