import Section from './Components/Section';
import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter';
import ContactList from './Components/ContactList';
import { useContacts } from './hooks/useContacts';
import { useState, useMemo } from 'react';

function App() {
  const [filter, setFilter] = useState('');

  const { data, transformValue } = useContacts();

  const filteredContacts = useMemo(() => {
    return data?.filter(
      contact =>
        transformValue(contact.name).includes(transformValue(filter)) ?? []
    );
  }, [data, transformValue, filter]);
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter value={filter} onChange={setFilter} />

        <ContactList filteredContacts={filteredContacts} />
      </Section>
    </>
  );
}

export default App;
