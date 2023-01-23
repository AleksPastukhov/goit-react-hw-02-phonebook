import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
import { List } from './ContactsList.styled';

function ContactsList({ filter, contactsSet, onDeleteContact }) {
  return (
    <>
      <List>
        <ContactItem
          contactsSet={contactsSet}
          filter={filter}
          onDeleteContact={onDeleteContact}
        />
      </List>
    </>
  );
}

export default ContactsList;
