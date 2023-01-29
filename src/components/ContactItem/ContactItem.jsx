import PropTypes from 'prop-types';
import { Item, Button } from './ContactItem.styled';

function ContactItem({ onDeleteContact, contactsSet = [], filter }) {
  return contactsSet
    .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
    .map(({ id, name, number }) => {
      return (
        <Item key={id}>
          <span>{name}: </span>
          <span>{number}</span>
          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </Item>
      );
    });
}

ContactItem.propTypes = {
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

export default ContactItem;
