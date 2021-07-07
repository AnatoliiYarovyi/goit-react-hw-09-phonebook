import style from './Container.module.css';
import React from 'react';

const Container = ({ children }) => (
  <div className={style.Container}>{children}</div>
);

export default Container;
