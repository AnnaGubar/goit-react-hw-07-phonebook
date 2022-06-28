import Section from './Components/Section';
import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter';
import ContactList from './Components/ContactList';
import { useContacts } from './hooks/useContacts';
import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

function App() {
  // const [filter, setFilter] = useState('');

  const { data, transformValue } = useContacts();
  const filter = useSelector(state => state.filter.value);

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
        <Filter />
        {/* аналог с контролируемой формой */}
        {/* <Filter value={filter} onChange={setFilter} /> */}

        <ContactList filteredContacts={filteredContacts} />
      </Section>
    </>
  );
}

export default App;
