import ContactItem from '../ContactItem';

function ContactsList({ filter, contactsSet, onDeleteContact }) {
  return (
    <>
      <ul>
        <ContactItem
          contactsSet={contactsSet}
          filter={filter}
          onDeleteContact={onDeleteContact}
        />
      </ul>
    </>
  );
}

export default ContactsList;
