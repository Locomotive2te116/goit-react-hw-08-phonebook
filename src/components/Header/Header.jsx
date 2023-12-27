import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn, selectUserName } from '../../store/auth/selector';
import { logoutThunk } from 'store/auth/operation';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUserName);
  const dispatch = useDispatch();
  return (
    <header>
      <h2>LOGO</h2>
      {user && <h2>{user}</h2>}
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
            | <button onClick={() => dispatch(logoutThunk())}>Exit</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
