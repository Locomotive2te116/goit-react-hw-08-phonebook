import React from 'react';
import s from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../../store/contacts/operations.js';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.contact_item}>
      <span>{name}: </span>
      <span>{number}</span>
      <button
        className={s.contactsBtn}
        type="button"
        onClick={() => dispatch(deleteContactThunk(id))}
      >
        Delete
      </button>
    </li>
  );
};
