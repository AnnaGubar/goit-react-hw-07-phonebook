import ContactListItem from './ContactListItem';
import { useContacts } from '../../hooks/useContacts';
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

export default ContactList;
