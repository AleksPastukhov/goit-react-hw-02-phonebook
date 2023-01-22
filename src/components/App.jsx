import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PhonebookSection from './PhonebookSection';

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

  createContact = (name, number) => {
    return {
      id: nanoid(4),
      name,
      number,
    };
  };

  formSubmitHendler = ({ name, number }) => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, this.createContact(name, number)],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <PhonebookSection
        title="Phonbook"
        contactsSet={contacts}
        onSubmit={this.formSubmitHendler}
      />
    );
  }
}

export default App;
