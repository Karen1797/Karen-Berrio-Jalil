import React, {Component} from 'react'

class Actividad extends Component{
    render(){
        return(
            <li id="listaActividades">
                <div class ="actividad" onClick={this.props.borrar}>
                {this.props.text}
                </div>
            </li>
            
        );
    }
}
export default Actividad