import React, { useState, useCallback } from 'react';
import style from './LoginView.module.css';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        console.warn(`Тип поля name - ${name} не обрабатывается`);
    }
  };

  const dispatch = useDispatch();
  const onLogin = useCallback(
    data => {
      dispatch(authOperations.logIn(data));
    },
    [dispatch],
  );

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onLogin({ email, password });
    reset();
  };
  return (
    <div>
      <h1>Страница логина</h1>

      <form onSubmit={handleSubmit} className={style.form} autoComplete="off">
        <label className={style.label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={style.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginView;
