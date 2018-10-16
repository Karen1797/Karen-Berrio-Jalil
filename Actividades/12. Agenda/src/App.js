import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      all:[],
      favorites:[]
    };
    this.addFavorites = this.addFavorites.bind(this);

  }

  //after mount
  componentDidMount(){
      //this.setState={
      fetch('https://randomuser.me/api/?results=10')
      .then(results => results.json())
      .then(data => {
        this.setState({
          all: data.results
        });
        console.log(data.results);
      });
    
  }

  addFavorites(contact) {
    this.setState({
      favorites: this.all.results.push()
    })
    
  }
  //update
 /*  componentDidUpdate(){

  }

  conponentWillUnmount(){

  } */

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <ContactList 
          contacts={this.state.all}
          title="Todos"
          key="1"
        />
        <ContactList 
          contacts={this.state.favorites} 
          title="Favoritos"
          key="2" 
        />
      </div>
    );
  }
}

const ContactList = (props) => {
  console.log(props);
  return(
    //<div>
      //<p>Hola</p>
      //<p>Holi</p>
    //</div>
    //);
    //return <p>{props.title}</p>
    <div>
      <h2>{props.title}</h2>
      {props.contacts.map(contact => <ContactCard key={contact.name.first} contact= {contact} />) }
    </div>
    //<ContactCard />
  );
};

class ContactCard extends React.Component {
  render() {
    return(
      <div  className="contact-card">
        <figure onClick={this.addFavorites}>
          <img src={this.props.contact.picture.medium} alt="Autor"/>
          <figcaption>{this.props.contact.name.first} {this.props.contact.name.last}</figcaption>
        </figure>
        <button>Favorito</button>
        <button>Eliminar</button>
      </div>
    );
  }
}
export default App;
