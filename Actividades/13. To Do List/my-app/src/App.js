import React, {Component} from 'react'
import './App.css'
import Actividad from './Actividad.js'
import { BrowserRouter, Route, Link} from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={};
  }

  render() {
    console.log(this.state);
    return (
      <div id="pagina">
        <BrowserRouter>
          <div >
            <Navigation />
            <Route exact path="/home" component={Home} />
            <Route exact path="/todolist" component={ToDoListSection} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const Navigation = (props) => {
  return(
    <nav>
      <ul id="barraNav" >
        <li><Link to={`/todolist`} >To Do List</Link></li>
        <li><Link to={`/home`}>Home</Link></li>
      </ul>
    </nav>
  );
}

const Home = (props) => {
  return(
    <div id="contPrincipal">
    <div id="bienvenida">Lista de actividades</div>
      <div id="pagPrincipal" ></div>
    </div>
  );
}


class ToDoListSection extends Component{
  constructor(props){
        super(props);
        this.state={
        elementos:'',  
        actividades: [],  
        }
  }

  actualizarElementos(elementos){
    this.setState({elementos:elementos.target.value})
  }

  agregarActividad(){
    
    if(this.state.elementos===''){return}

    let actividadesArr = this.state.actividades;
    actividadesArr.push(this.state.elementos);
    this.setState({
      elementos:''
    });
    this.ingresarTexto.focus();

  }

  borrarActividad(index){
    let actividadesArr = this.state.actividades;
    actividadesArr.splice(index,1);
    this.setState({actividades:actividadesArr})
  }

  presionar= (event)=> {
    if (event.key ==='Enter'){
      if(this.state.elementos===''){return}
      let actividadesArr = this.state.actividades;
      actividadesArr.push(this.state.elementos);
      this.setState({
        elementos:''
      });
    }
  }

    render(){

        let actividades = this.state.actividades.map((val,key)=>{
            return <Actividad key ={key} text = {val}
            borrar={()=>this.borrarActividad(key)} />
        })

        return(
            <div className="aplicacion">

                <h1>To Do List</h1>
                <div className="lista">
                   {actividades}
                </div>
                <input type="text"
                    ref ={((input)=>{this.ingresarTexto=input })}
                    className="cuadroTexto"
                    onChange={elementos=>this.actualizarElementos(elementos)}
                    onKeyPress={this.presionar.bind(this)}
                    value = {this.state.elementos}
                />
                <button className="agregar" onClick={this.agregarActividad.bind(this)}>Agregar</button>

            </div>
        );
    }
}

export default App;