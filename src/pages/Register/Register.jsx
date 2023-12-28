import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../store/auth/operation.js';
import s from './Register.module.css';
const Register = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const submit = data => {
    console.log(data);
    dispatch(registerThunk(data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label className={s.styleForm}>
          <span>Name</span>
          <input
            className={s.win}
            {...register('name')}
            type="text"
            placeholder="Enter your name"
          />
        </label>
        <label className={s.styleForm}>
          <span>Email</span>
          <input
            className={s.win}
            {...register('email')}
            type="email"
            placeholder="Enter your email"
          />
        </label>
        <label className={s.styleForm}>
          <span>Password</span>
          <input
            className={s.win}
            {...register('password')}
            type="text"
            placeholder="Enter your password"
          />
        </label>
        <button className={s.inputbtn}>Register</button>
      </form>
    </div>
  );
};

export default Register;
