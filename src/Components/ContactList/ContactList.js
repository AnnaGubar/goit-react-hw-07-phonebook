import ContactListItem from './ContactListItem';
import { useContacts } from '../../hooks/useContacts';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';


function ContactList({filteredContacts}) {
  const {data}=useContacts();


  return (
    <ul className={s.list}>
      {data &&
        filteredContacts.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
          />
        ))}
    </ul>
  );
}

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
