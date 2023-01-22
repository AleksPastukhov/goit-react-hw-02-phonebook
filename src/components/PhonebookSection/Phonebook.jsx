import Form from '../Form';
import ContactsList from '../ContactsList';

function PhonebookSection({ title, contactsSet, onSubmit }) {
  return (
    <>
      <h1>{title}</h1>
      <section>
        <Form onSubmit={onSubmit} />
        <ContactsList title={'Statistics'} contactsSet={contactsSet} />
      </section>
    </>
  );
}

export default PhonebookSection;
