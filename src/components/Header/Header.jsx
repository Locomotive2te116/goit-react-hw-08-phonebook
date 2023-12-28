import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../store/auth/selector';
import UserMenu from 'components/UserMenu/UserMenu';
import s from './Header.module.css';
const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={s.container}>
      <h2>Home Phonebook</h2>

      <div className={s.title2}>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
        {!isLoggedIn && (
          <>
            <NavLink to="/register">Sing Up</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
        {isLoggedIn && (
          <>
            <UserMenu />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
