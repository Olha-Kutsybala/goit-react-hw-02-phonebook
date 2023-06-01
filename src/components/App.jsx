import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './contactList';
import Filter from './filter';
import Form from './form';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const { contacts } = this.state;

    if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
    } else if (name.trim() === '' || number.trim() === '') {
      alert("Enter the contact's name and number phone!");
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  removeContact = ContId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== ContId),
      };
    });
  };

  getFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getListContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const listContacts = this.getListContacts();

    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <Form onSubmit={this.addContact}></Form>
        <h2 className={css.title}>Contacts</h2>
        {contacts.length > 1 && (
          <Filter value={filter} onChange={this.getFilter} />
        )}
        {contacts.length > 0 ? (
          <ContactList
            contacts={listContacts}
            onRemoveContact={this.removeContact}
          />
        ) : (
          <p>Your phonebook is empty. Please add contact.</p>
        )}
      </div>
    );
  }
}
