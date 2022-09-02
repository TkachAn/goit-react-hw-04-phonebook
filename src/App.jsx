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
  const [contacts, setContacts] = useState(loadFromStorage('phonebook'));
  const [filter, setFilter] = useState('');

  useEffect(() => {
    saveInStorage('phonebook', contacts);
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

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
    }
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    const del = contacts.filter(contact => contact.id !== contactId);
    setContacts(del);
  };

  const filteredContacts = getFilterContacts();

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      {contacts.length > 1 && <Filter value={filter} onChange={changeFilter} />}
      {contacts.length > 0 ? (
        <ContactList contacts={filteredContacts} onDel={deleteContact} />
      ) : (
        <p>Your phonebook is empty. Please add contact.</p>
      )}
    </div>
  );
}

export default App;
