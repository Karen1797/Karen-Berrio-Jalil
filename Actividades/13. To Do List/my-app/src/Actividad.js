import React, {Component} from 'react'

class Actividad extends Component{
    render(){
        return(
            <div class ="actividad" onClick={this.props.borrar}>
            {this.props.text}
            </div>
        );
    }
}
export default Actividad