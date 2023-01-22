import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PhonebookSection from '../PhonebookSection';
import { Wrapper } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleChange = request => {
    this.setState({
      filter: request,
    });
  };

  createContact = (name, number) => {
    return {
      id: nanoid(4),
      name,
      number,
    };
  };

  formSubmitHendler = ({ name, number }) => {
    for (let contact of this.state.contacts) {
      if (contact.name === name) {
        alert(`${name} is already in contacts`);
        return;
      }
    }
    this.setState(({ contacts }) => ({
      contacts: [...contacts, this.createContact(name, number)],
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <Wrapper>
        <PhonebookSection
          mainTitle="Phonebook"
          title="Contacts"
          contactsSet={contacts}
          onSubmit={this.formSubmitHendler}
          onChange={this.handleChange}
          filter={filter}
          onDeleteContact={this.deleteContact}
        />
      </Wrapper>
    );
  }
}

export default App;
