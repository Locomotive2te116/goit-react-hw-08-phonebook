import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginThunk } from 'store/auth/operation';
import s from './Login.module.css';
const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = data => {
    console.log(data);
    dispatch(loginThunk(data))
      .unwrap()
      .then(res => {
        console.log(res);
        navigate('/contacts');
        toast.success(`Hi ${res.user.name}!`);
      })
      .catch(() => {
        toast.error('Ne vgadav!');
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
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
        <button className={s.inputbtn}>Login</button>
      </form>
    </div>
  );
};

export default Login;
