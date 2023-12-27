import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/phonebookSlice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    phonebook: contactsReducer,
    auth: authReducer,
  },
});
