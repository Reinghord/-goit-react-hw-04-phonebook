import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onSubmit = (submitName, submitNumber) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === submitName.toLowerCase()
      )
    ) {
      return alert(`${submitName} is already in contacts.`);
    }
    setContacts(state => [
      ...state,
      {
        id: nanoid(),
        name: submitName,
        number: submitNumber,
      },
    ]);
  };

  const onFilter = filterText => {
    setFilter(filterText);
  };

  const onFilteredContacts = () => {
    if (filter) {
      return contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
      });
    }
    return contacts;
  };

  const onDelete = deleteId => {
    setContacts(state => state.filter(contact => contact.id !== deleteId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmit} />

      <h2>Contacts</h2>
      <Filter onFilter={onFilter} filter={filter} />
      <ContactList
        onFilteredContacts={onFilteredContacts}
        onDelete={onDelete}
      />
    </div>
  );
}

export default App;
