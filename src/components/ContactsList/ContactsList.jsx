function ContactsList({ title, contactsSet = [] }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {contactsSet.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <span>{name}: </span>
              <span>{number}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default ContactsList;
