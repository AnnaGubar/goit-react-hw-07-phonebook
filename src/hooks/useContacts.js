import {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} from '../redux/contactsSlice';

export function useContacts() {
const { data } = useGetContactsQuery();
const [addContact] = useAddContactMutation();
const [deleteContact] = useDeleteContactMutation();

  const transformValue = value => value.toLowerCase().trim();

  const isContactExists = newContact =>
  data.find(
      contact =>
        transformValue(contact.name) === transformValue(newContact.name),
    );

  return {
    data,
    addContact,
    deleteContact,
    isContactExists,
    transformValue,
  };
}

