import PropTypes from 'prop-types';
import { Item, Button } from './ContactItem.styled';

function ContactItem({ id, name, number, onDeleteContact }) {
  return (
    <Item key={id}>
      <span>{name}: </span>
      <span>{number}</span>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </Item>
  );
}

ContactItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
