import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../store/auth/operation.js';

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
        <label>
          <span>Name</span>
          <input
            {...register('name')}
            type="text"
            placeholder="Enter your name"
          />
        </label>
        <label>
          <span>Email</span>
          <input
            {...register('email')}
            type="email"
            placeholder="Enter your email"
          />
        </label>
        <label>
          <span>Password</span>
          <input
            {...register('password')}
            type="text"
            placeholder="Enter your password"
          />
        </label>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
