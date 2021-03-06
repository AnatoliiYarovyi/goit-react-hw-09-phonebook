import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactOperations } from '../../redux/contact';
import style from './ContactList.module.css';
import PropTypes from 'prop-types';
import { getVisibleContacts } from '../../redux/contact/contact-selectors';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const deleteContacts = useCallback(
    id => {
      dispatch(contactOperations.deleteContacts(id));
    },
    [dispatch],
  );

  return (
    <ul className={style.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={style.item}>
          <span className={style.textName}>{name}:</span>
          <span className={style.textNamber}>{number}</span>
          <button
            type="button"
            className={style.button}
            onClick={() => deleteContacts(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  deleteContacts: PropTypes.func,
};

export default ContactList;
