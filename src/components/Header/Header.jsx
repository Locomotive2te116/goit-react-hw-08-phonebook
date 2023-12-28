import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../store/auth/selector';
import UserMenu from 'components/UserMenu/UserMenu';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <h2>LOGO</h2>

      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
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
