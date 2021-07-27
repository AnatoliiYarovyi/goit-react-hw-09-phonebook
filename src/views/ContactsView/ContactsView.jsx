import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './Contactsview.module.css';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';
import contactOperations from '../../redux/contact/contact-operations';
import { getLoading } from '../../redux/contact/contact-selectors';

const ContactsView = () => {
  const isLoadingContacts = useSelector(getLoading);
  const dispatch = useDispatch();
  const fetchContacts = useCallback(() => {
    dispatch(contactOperations.fetchContact());
  }, [dispatch]);

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className={style.conteiner}>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={style.caption}>Contacts</h2>
      <Filter />
      {isLoadingContacts && <h1>Loading...</h1>}
      <ContactList />
    </div>
  );
};

export default ContactsView;
