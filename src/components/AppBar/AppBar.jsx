import React from 'react';
import style from './AppBar.module.css';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const AppBar = ({ isAuthenticated }) => (
  <header className={style.header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
