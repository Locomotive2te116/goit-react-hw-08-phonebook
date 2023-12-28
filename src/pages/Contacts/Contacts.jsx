import ContactsList from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Input } from 'components/Input/Input';
import React from 'react';
import s from './Contacts.module.css';
const Contacts = () => {
  return (
    <div>
      {' '}
      <h1 className={s.title}>Phonebook</h1>
      <Input />
      <h2 className={s.title2}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default Contacts;
