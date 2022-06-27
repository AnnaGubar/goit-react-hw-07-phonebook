import { useSelector, useDispatch } from 'react-redux';
import {
  deleteContactReducer,
  addContactReducer,
  setFilterReducer,
} from '../../redux/contactsSlice';

export function useContacts() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();
  
  const addContact = newContact => dispatch(addContactReducer(newContact));
  const deleteContact = id => dispatch(deleteContactReducer(id));
  const filterValue = value =>
    dispatch(setFilterReducer(transformValue(value)));

  const transformValue = value => value.toLowerCase().trim();

  const isContactExists = newContact =>
    contacts.find(
      contact =>
        transformValue(contact.name) === transformValue(newContact.name),
    );

  const filterContacts = () =>
    contacts.filter(contact => contact.name.includes(filter));

  return {
    contacts,
    filter,
    deleteContact,
    addContact,
    isContactExists,
    filterValue,
    filterContacts,
  };
}
