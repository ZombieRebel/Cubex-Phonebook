import React from 'react';
import ContactSummary from './ContactSummary';
import { Link } from 'react-router-dom';

const ContactList = ({ contacts }) => {
  return (
    <div>
      {contacts &&
        contacts.map(contact => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Link to={'/contact/' + contact.id} key={contact.id}>
              <ContactSummary contact={contact} />
            </Link>
          );
        })}
    </div>
  );
};

export default ContactList;
