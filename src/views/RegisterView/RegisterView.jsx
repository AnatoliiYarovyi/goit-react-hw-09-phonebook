import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import style from './RegisterView.module.css';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1>Страница регистрации</h1>

        <form
          onSubmit={this.handleSubmit}
          className={style.form}
          autoComplete="off"
        >
          <label className={style.label}>
            Имя
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <label className={style.label}>
            Почта
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className={style.label}>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    );
  }
}

// -----Развернутый вариант------------
// const mapDispatchToProps = dispatch => ({
//   onRegister: (data) => dispatch(authOperations.register(data))
// });

// ----- Сокращенный вариант ----------
const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
