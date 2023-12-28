import ContactsList from '../pages/Contacts/ContactsList/ContactsList';
import { Input } from '../pages/Contacts/Input/Input';
import { Filter } from '../pages/Contacts/Filter/Filter';
import s from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import { NotFound } from 'pages/NotFound/NotFound';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from 'store/auth/operation';
import { PrivateRoute } from 'RoutesConfig/PrivateRoute';
import { PublicRoute } from 'RoutesConfig/PublicRoute';
import { selectIsRefresh } from 'store/auth/selector';
import { Loader } from './Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefresh);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return isRefresh ? (
    <Loader />
  ) : (
    <div>
      <Header />
      <div className={s.container}>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route
            path="/contacts"
            element={
              <>
                <PrivateRoute>
                  <h1 className={s.title}>Phonebook</h1>
                  <Input />
                  <h2 className={s.title2}>Contacts</h2>
                  <Filter />
                  <ContactsList />
                </PrivateRoute>
              </>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};
