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

ContactsList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contactsSet: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
};

export default ContactsList;
