import ContactListItem from './ContactListItem';
import { useContacts } from '../../hooks/useContacts';
import s from './ContactList.module.css';

function ContactList() {
  const {data}=useContacts();

  return (
    <ul className={s.list}>
      {/* {contacts &&
        filterContacts(contacts).map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        ))} */}
      {data &&
        data.map(({ id, name, number }) => (
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
