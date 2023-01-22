function ContactItem({ onDeleteContact, contactsSet = [], filter }) {
  return contactsSet
    .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
    .map(({ id, name, number }) => {
      return (
        <li key={id}>
          <span>{name}: </span>
          <span>{number}</span>
          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      );
    });
}

export default ContactItem;
