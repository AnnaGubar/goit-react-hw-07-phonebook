import Section from './Components/Section';
import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter';
import ContactList from './Components/ContactList';

function App() {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />

        <ContactList />
      </Section>
    </>
  );
}

export default App;
