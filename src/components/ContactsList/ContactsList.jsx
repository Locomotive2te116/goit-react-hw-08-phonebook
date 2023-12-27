import React, { useEffect } from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';
import s from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from '../../store/operations.js';
import {
  getContacts,
  getFilter,
  SelectLoading,
  SelectError,
} from '../../store/selector.js';
const ContactsList = () => {
  // { children }
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const loading = useSelector(SelectLoading);
  const error = useSelector(SelectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter?.toLowerCase() || '')
  );

  return (
    <>
      {/* {children} */}
      {filteredContacts.length === 0 ? (
        <p>No contacts match your search</p>
      ) : (
        <ul className={s.contact_list}>
          {filteredContacts?.map(({ id, name, phone }) => (
            <ContactItem key={id} id={id} name={name} phone={phone} />
          ))}
        </ul>
      )}
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
    </>
  );
};
export default ContactsList;
