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
import { Loader } from './Loader/Loader';
import Home from './Home/Home';
import Contacts from 'pages/Contacts/Contacts';

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
          <Route path="/" element={<Home />} />
          <Route
            path="/contacts"
            element={
              <>
                <PrivateRoute>
                  <Contacts />
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
