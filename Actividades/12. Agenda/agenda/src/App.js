import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';
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
            <Route exact path="/contactlist" component={ContactListSection} />
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
        <li><Link to={`/contactlist`} >Contact List</Link></li>
        <li><Link to={`/home`} >Home</Link></li>
      </ul>
    </nav>
  );
}

const Home = (props) => {
  return(
    <div id="contPrincipal">
    <div id="bienvenida">Bienvenido a tu libreta de Contactos</div>
      <div id="pagPrincipal" ></div>
    </div>
  );
}

class ContactListSection extends React.Component {
  constructor(props){
    super(props);
    this.state={
      all:[],
      favorites:[]
    };
    this.addToFavorites = this.addToFavorites.bind(this);
    this.removeContact = this.removeContact.bind(this);
  }

  addToFavorites(contact, title){
    console.log("Añadir a Favoritos" );
    var contacto= contact;
    if (title=="Todos"){
      const newAll = this.state.all.filter(c => c.login.uuid !== contact.login.uuid);
      const newFavorites = this.state.favorites.concat(contact);
      this.setState({
        all: newAll,
        favorites: newFavorites
      })
    } else {
      const newFavorites = this.state.favorites.filter(c => c.login.uuid !== contact.login.uuid);
      const newAll = this.state.all.concat(contact);
      this.setState({
        all: newAll,
        favorites: newFavorites
      })
    }
  }

  removeContact(contact){
    console.log("Eliminar Contacto");
    const newFavorites = this.state.favorites.filter(c => c.login.uuid !== contact.login.uuid);
    const newAll = this.state.all.filter(c => c.login.uuid !== contact.login.uuid);
    this.setState({
      all: newAll,
      favorites: newFavorites
    })
  }

  componentDidMount(){
      fetch('https://randomuser.me/api/?results=10')
      .then(results => results.json())
      .then(data => {
        this.setState({
          all: data.results
        });
        console.log(data.results);
      });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <ContactList 
          contacts={this.state.all}
          title="Todos"
          key="1"
          addToFavorites={this.addToFavorites}
          removeContact={this.removeContact}
        />
        <ContactList 
          contacts={this.state.favorites} 
          title="Favoritos"
          key="2" 
          addToFavorites={this.addToFavorites}
          removeContact={this.removeContact}
        />
      </div>
    );
  }
}

const ContactList = (props) => {
  return(
    <div>
      <h2>{props.title}</h2>
      {props.contacts.map(contact => <ContactCard 
      key={contact.name.first} 
      contact= {contact}
      title= {props.title} 
      addToFavorites = {props.addToFavorites} 
      removeContact = {props.removeContact} />) }
    </div>
  );
};

ContactList.propTypes = {
addToFavorites: PropTypes.func.isRequired,
contacts: PropTypes.array.isRequired,
title: PropTypes.string.isRequired,
removeContact: PropTypes.func.isRequired,
}

class ContactCard extends React.Component {
  constructor(props){
    super(props);
    this.onclickFavorites = this.onclickFavorites.bind(this);
    this.onclickRemove = this.onclickRemove.bind(this);
  }

  onclickFavorites() {
    this.props.addToFavorites(this.props.contact,this.props.title);
  }

  onclickRemove() {
    this.props.removeContact(this.props.contact);
  }
  
  render() {
    return(
      <div  className="contact-card">
        <figure >
          <img src={this.props.contact.picture.medium} alt="Autor"/>
          <figcaption>{this.props.contact.name.first} {this.props.contact.name.last}</figcaption>
        </figure>
        <button onClick={this.onclickFavorites}>Favorito</button>
        <button onClick={this.onclickRemove}>Eliminar</button>
      </div>
    );
  }
}

export default App;
