import PropTypes from 'prop-types';
import { Button, ListItem } from './ContactList.styled';

function ContactList({ onFilteredContacts, onDelete }) {
  const filteredContacts = onFilteredContacts();
  return (
    <>
      <ul>
        {filteredContacts.map(contact => {
          return (
            <ListItem key={contact.id}>
              {contact.name}: {contact.number}{' '}
              <Button
                onClick={() => {
                  onDelete(contact.id);
                }}
              >
                Delete
              </Button>
            </ListItem>
          );
        })}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  onFilteredContacts: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
