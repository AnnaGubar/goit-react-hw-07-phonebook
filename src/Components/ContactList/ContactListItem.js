import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PropTypes from 'prop-types';
import { useContacts } from '../../hooks/useContacts';
import s from './ContactList.module.css';

function ContactListItem({ id, name, number }) {
  const { deleteContact } = useContacts();

  const handleDeleteContact = id => {
    deleteContact(id);
    toast(`${name} is deleted from your list`);
  };

  return (
    <li className={s.contact}>
      <p>{name}</p>: <span>{number}</span>
      <button
        className={s.delete}
        type="button"
        onClick={() => handleDeleteContact(id)}>
        Delete
      </button>
      <ToastContainer />
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
