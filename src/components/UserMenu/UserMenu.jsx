import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'store/auth/operation';
import { selectUserName } from '../../store/auth/selector';

const UserMenu = () => {
  const user = useSelector(selectUserName);
  const dispatch = useDispatch();
  return (
    <>
      {user && <h2>{user}</h2>}
      <button onClick={() => dispatch(logoutThunk())}>Exit</button>
    </>
  );
};

export default UserMenu;
