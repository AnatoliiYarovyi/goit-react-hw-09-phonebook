import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import style from './Navigation.module.css';

const Navigation = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={style.link}
        activeClassName={style.active}
      >
        Главная
      </NavLink>

      {isAuthenticated && (
        <NavLink
          to="/contacts"
          exact
          className={style.link}
          activeClassName={style.active}
        >
          Контакты
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
