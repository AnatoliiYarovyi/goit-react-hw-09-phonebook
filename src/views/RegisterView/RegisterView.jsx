import React, { useState } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import style from './RegisterView.module.css';

const RegisterView = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onRegister({ name, email, password });
    reset();
  };

  return (
    <div>
      <h1>Страница регистрации</h1>

      <form onSubmit={handleSubmit} className={style.form} autoComplete="off">
        <label className={style.label}>
          Имя
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

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

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

// -----Развернутый вариант------------
// const mapDispatchToProps = dispatch => ({
//   onRegister: (data) => dispatch(authOperations.register(data))
// });

// ----- Сокращенный вариант ----------
const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
