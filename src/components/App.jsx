import React from "react";
import { Contacts } from "./Contacts/Contacts";
import { Form } from "./Form/Form";
import { nanoid } from 'nanoid'
import { Filter } from "./Filter/Filter";

export class App extends React.Component {
  
  state = {
    contacts: [],
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

  componentDidMount() {
    this.setState({
      contacts: JSON.parse(localStorage.getItem('contacts'))
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  render() {
    const { filter, contacts } = this.state;
    let visibleContacts = [];
    if (contacts.length > 0) {
      visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    }
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
