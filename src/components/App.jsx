import React, {useState, useEffect} from "react";
import { Contacts } from "./Contacts/Contacts";
import { Form } from "./Form/Form";
import { nanoid } from 'nanoid'
import { Filter } from "./Filter/Filter";

export const App = () => {

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  const formSubmitHandler = data => {
    const contact = {
      id: nanoid(8),
      name: data.name,
      number: data.number
    }
    
    if (contacts.some(element => (element.name.toLowerCase() === contact.name.toLowerCase()))) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    setContacts(prevState => ([contact, ...prevState]));
  }
  
  const deleteContact = (contactId) => {
    setContacts(prevState => (prevState.filter(contact => contact.id !== contactId)))
  }

  const changeFilter = event => {
    setFilter(event.currentTarget.value)
  }
  
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

  return ( 
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter filter={filter} change={changeFilter} />
        <br />
        <Contacts contacts={visibleContacts} onDeleteContact={deleteContact} />
      </div>
      
  )

}

// export class App extends React.Component {
  
//   state = {
//     contacts: [],
//     filter: ''
//   }

//   formSubmitHandler = data => {
//     const contact = {
//       id: nanoid(8),
//       name: data.name,
//       number: data.number
//     }
    
//     if (this.state.contacts.some(element => (element.name.toLowerCase() === contact.name.toLowerCase()))) {
//       alert(`${contact.name} is already in contacts`);
//       return;
//     }

//     this.setState(prevState => ({
//       contacts: [contact, ...prevState.contacts]
//     }));
    
//   }

//   deleteContact = (contactId) => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }))
//   }

//   changeFilter = (event) => {
//     this.setState({filter: event.currentTarget.value})
//   }

//   componentDidMount() {
//     if (JSON.parse(localStorage.getItem('contacts')) !== null) {
//       this.setState({
//         contacts: JSON.parse(localStorage.getItem('contacts'))
//       })
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
//     }
//   }

//   render() {
//     const { filter, contacts } = this.state;
//     const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
//     return ( 
//       <div>
//         <h1>Phonebook</h1>
//         <Form onSubmit={this.formSubmitHandler} />
//         <h2>Contacts</h2>
//         <Filter filter={filter} change={this.changeFilter} />
//         <br />
//         <Contacts contacts={visibleContacts} onDeleteContact={this.deleteContact} />
//       </div>
      
//   );}
// };
