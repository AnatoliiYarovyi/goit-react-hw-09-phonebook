import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import style from './Backdrop.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const backdropRoot = document.querySelector('#backdrop-root');

export default class Backdrop extends Component {
  render() {
    return createPortal(
      <div className={style.backdrop}>
        <Loader
          type="Circles"
          color="#00BFFF"
          height={100}
          width={100}
          className={style.load}
        />
      </div>,
      backdropRoot,
    );
  }
}
