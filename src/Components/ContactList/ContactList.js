// import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import { useContacts } from '../hooks/useContacts';
import s from './ContactList.module.css';

function ContactList() {
  const { contacts, deleteContact,filterContacts } = useContacts();

  return (
    <ul className={s.list}>
      {contacts &&
        filterContacts(contacts).map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        ))}
    </ul>
  );
}

// ContactList.propTypes = {
//   contactName: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ),
// };

export default ContactList;
