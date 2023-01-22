import Form from '../Form';
import ContactsList from '../ContactsList';
import Filter from '../Filter';

function PhonebookSection({
  mainTitle,
  title,
  filter,
  contactsSet,
  onSubmit,
  onChange,
  onDeleteContact,
}) {
  return (
    <>
      <h1>{mainTitle}</h1>
      <section>
        <Form onSubmit={onSubmit} />
        <h2>{title}</h2>
        <Filter filter={filter} onChange={onChange} />
        <ContactsList
          contactsSet={contactsSet}
          filter={filter}
          onDeleteContact={onDeleteContact}
        />
      </section>
    </>
  );
}

export default PhonebookSection;
