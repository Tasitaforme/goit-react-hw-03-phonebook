import PropTypes from 'prop-types';
import { ListItem, Button } from './ContactList.styled';


const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
           <span> {name}: {number} </span>
            <Button type="button" onClick={() => deleteContact(id)}>Delete</Button>
          </ListItem>
        );
      })}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })).isRequired,
    deleteContact: PropTypes.func.isRequired,
};