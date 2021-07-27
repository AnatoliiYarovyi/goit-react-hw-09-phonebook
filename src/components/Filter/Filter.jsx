import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { chengeFilter } from '../../redux/contact/contact-action';
import style from './Filter.module.css';
import PropTypes from 'prop-types';
import { getFilter } from '../../redux/contact/contact-selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onHandleChenge = useCallback(
    event => {
      dispatch(chengeFilter(event.currentTarget.value));
    },
    [dispatch],
  );
  return (
    <div>
      <h3 className={style.title}>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onHandleChenge}
        className={style.input}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onHandleChenge: PropTypes.func,
};

export default Filter;
