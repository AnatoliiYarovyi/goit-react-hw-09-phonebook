import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './AuthNav.module.css';

const AuthNav = () => (
  <div className={style.conteiner}>
    <NavLink
      to="/register"
      exact
      className={style.link}
      activeClassName={style.activeLink}
    >
      Регистрация
    </NavLink>
    <NavLink
      to="/login"
      exact
      className={style.link}
      activeClassName={style.activeLink}
    >
      Логин
    </NavLink>
  </div>
);

export default AuthNav;
