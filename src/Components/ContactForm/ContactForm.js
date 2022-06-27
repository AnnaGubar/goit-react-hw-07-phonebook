import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useContacts } from '../hooks/useContacts';
import s from './ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { addContact, isContactExists } = useContacts();

  const handleChange = e => {
    if (e.currentTarget.name === 'name') {
      setName(e.currentTarget.value);
    }
    if (e.currentTarget.name === 'number') {
      setNumber(e.currentTarget.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (isContactExists(newContact)) {
      console.log('уже есть, пропускаю');
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    console.log('новый, создаю');
    addContact(newContact);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.name}>
        Name
        <input
          type="text"
          placeholder="Enter some name"
          name="name" // для паттерна обновления state
          value={name} // e.currentTarget
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          placeholder="Enter phone number"
          name="number" // для паттерна обновления state
          value={number} // e.currentTarget
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.submit} type="submit">
        Add contact
      </button>
    </form>
  );
}
export default ContactForm;
