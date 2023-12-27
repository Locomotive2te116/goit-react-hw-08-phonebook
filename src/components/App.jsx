import ContactsList from '../pages/Contacts/ContactsList/ContactsList';
import { Input } from '../pages/Contacts/Input/Input';
import { Filter } from '../pages/Contacts/Filter/Filter';
import s from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import { NotFound } from 'pages/NotFound/NotFound';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from 'store/auth/operation';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <div className={s.container}>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route
            path="/contacts"
            element={
              <>
                <h1 className={s.title}>Phonebook</h1>
                <Input />
                <h2 className={s.title2}>Contacts</h2>
                <Filter />
                <ContactsList />
              </>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};
