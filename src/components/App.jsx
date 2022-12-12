import React from "react";
import { Contacts } from "./Contacts/Contacts";
import { Form } from "./Form/Form";
import { nanoid } from 'nanoid'
import { Filter } from "./Filter/Filter";

export class App extends React.Component {
  
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  formSubmitHandler = data => {
    const contact = {
      id: nanoid(8),
      name: data.name,
      number: data.number
    }
    
    if (this.state.contacts.some(element => (element.name.toLowerCase() === contact.name.toLowerCase()))) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }));
    
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }

  changeFilter = (event) => {
    this.setState({filter: event.currentTarget.value})
  }

  render() {
    const {filter} = this.state;
    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    
    return ( 
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter filter={filter} change={this.changeFilter} />
        <br />
        <Contacts contacts={visibleContacts} onDeleteContact={this.deleteContact} />
      </div>
      
  );}
};
