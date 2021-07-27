import React, { useState, useCallback } from 'react';
import style from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { contactOperations } from '../../redux/contact';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.warn(`Тип поля name - ${name} не обрабатывается`);
    }
  };

  const dispatch = useDispatch();
  const addContacts = useCallback(
    contactForm => {
      dispatch(contactOperations.addContacts(contactForm));
    },
    [dispatch],
  );

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addContacts({ name, number });
    reset();
  };

  return (
    <form className={style.ContactForm} onSubmit={handleSubmit}>
      <label className={style.label}>Name</label>
      <input
        className={style.input}
        value={name}
        onChange={handleChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <label className={style.labelNamber}>Number</label>
      <input
        className={style.input}
        value={number}
        onChange={handleChange}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />
      <button type="submit" className={style.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
