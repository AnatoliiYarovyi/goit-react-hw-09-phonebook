import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import style from './Navigation.module.css';

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink to="/" exact className={style.link} activeClassName={style.active}>
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

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
