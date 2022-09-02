import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import {
  saveInStorage,
  loadFromStorage,
} from './components/storageService/storageService';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import css from './App.module.css';

function App() {
  // state = {
  //   contacts: [],
  //   filter: '',
  // };

  const [contacts, setContacts] = useState(loadFromStorage('phonebook'));
  const [filter, setFilter] = useState('');
  console.log('contacts1', contacts);
  console.log('loadFromStorage1', loadFromStorage('phonebook'));
  console.log('contacts2', contacts);

  let stor = loadFromStorage('phonebook');
  console.log('stor', stor);
  useEffect(contacts => {
    if (
      contacts !== null &&
      contacts !== '' &&
      contacts !== undefined &&
      contacts !== loadFromStorage('phonebook')
    ) {
      console.log('contacts3', contacts);
      console.log('loadFromStorage2', loadFromStorage('phonebook'));
      saveInStorage('phonebook', contacts);
    }
  }, []);
  useEffect(() => {
    console.log('contacts3', contacts);
  }, [contacts]);
  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    // const { contacts } = this.state;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`Name ${name} is already in contacts .`);
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`Number ${number} is already in contacts.`);
    } else {
      setContacts([...contacts, contact]);
      console.log('contacts5', contacts);
      // saveInStorage('phonebook', contacts);
    }
  };

  // const deleteContact = contactId => {
  //   this.setState(({ contacts }) => ({
  //     contacts: contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

  const changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  const getVisibleContacts = () => {
    // const { contacts, filter } = state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // render() {
  //   const { filter, contacts } = this.state;
  //   const visibleContacts = this.getVisibleContacts();
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      {contacts.length > 1 && <Filter value={filter} onChange={changeFilter} />}
      {contacts.length > 0 ? (
        <ContactList
          contacts={getVisibleContacts}
          onDeleteContact={deleteContact}
        />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
    </div>
  );
}
// }

export default App;
