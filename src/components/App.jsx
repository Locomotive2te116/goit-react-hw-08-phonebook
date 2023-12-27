import ContactsList from './ContactsList/ContactsList';
import { Input } from './Input/Input';
import { Filter } from './Filter/Filter';
import s from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import { NotFound } from 'pages/NotFound';

export const App = () => {
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
          <Route path="/register" element={<h1>Register</h1>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};
