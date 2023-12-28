import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'store/auth/operation';
import { selectUserName } from '../../store/auth/selector';
import s from './UserMenu.module.css';
const UserMenu = () => {
  const user = useSelector(selectUserName);
  const dispatch = useDispatch();
  return (
    <>
      {user && <h2>Hi, {user}</h2>}
      <button className={s.button} onClick={() => dispatch(logoutThunk())}>
        Exit
      </button>
    </>
  );
};

export default UserMenu;
