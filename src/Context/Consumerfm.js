import React, {Component} from 'react';
import MarketContext from './MarketContext';

class Consumerfm extends Component {
    static contextType = MarketContext;
    render(){
        return(
            <div>
                {this.context.usuarios}
                <button onClick={this.context.agregarUsuario.bind(this)}>
                    Agregar Usuario
                </button>

            </div>
           
        );
    }
}
export default Consumerfm;