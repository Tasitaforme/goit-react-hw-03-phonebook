import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Notification from './Notification/Notification';
import { Container, Title } from './App.styled';

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

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  createContact = contact => {
    const newContact = {
      id: nanoid(),
      ...contact,
    };

    this.setState(prevState => {
      const isNameExist = prevState.contacts.find(
        ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
      );
      const isNumberExist = prevState.contacts.find(
        ({ number }) => number.toLowerCase() === newContact.number.toLowerCase()
      );

      if (isNameExist) {
        return alert(`${newContact.name} is already in contacts.`);
      }
      if (isNumberExist) {
        return alert(`${newContact.number} is already in contacts.`);
      }
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    const isEmptyContactList = contacts.length === 0;

    return (
      <Container>
        <h1>Phonebook</h1>
        <Notification message="Add number to contacts" />
        <ContactForm createContact={this.createContact} />

        <Title>Contacts</Title>
        {isEmptyContactList ? (
          <Notification message="Your phonebook is empty" />
        ) : (
          <>
            <Filter value={filter} onChange={this.changeFilter} />
            <ContactList
              contacts={visibleContacts}
              deleteContact={this.deleteContact}
            />
            {visibleContacts.length === 0 && (
              <Notification message="Nothing found" />
            )}
          </>
        )}
      </Container>
    );
  }
}
export default App;
