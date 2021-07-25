import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import style from './Contactsview.module.css';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';
import contactOperations from '../../redux/contact/contact-operations';
import { getLoading } from '../../redux/contact/contact-selectors';

const ContactsView = ({ isLoadingContacts, fetchContacts }) => {
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

const mapStateToProps = state => ({
  isLoadingContacts: getLoading(state),
});
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactOperations.fetchContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
