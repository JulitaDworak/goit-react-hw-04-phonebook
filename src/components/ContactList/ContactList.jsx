import React from 'react';
import PropTypes from 'prop-types';

export function ContactList({ contacts, onDeleteContact }) {
  const handleDelete = (id) => {
    onDeleteContact(id);
  };
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name} - {contact.number}
          <button onClick={() => handleDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
ContactList.propTypes = {
  onClick: PropTypes.func.isRequired,
};