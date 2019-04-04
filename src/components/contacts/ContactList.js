import React from "react";
import ContactDetails from "./ContactDetails";
import ContactSummary from "./ContactSummary";

const ContactList = ({ contacts }) => {
  return (
    <div>
      {contacts &&
        contacts.map(contact => {
          return <ContactDetails contact={contact} key={contact.id} />;
        })}
    </div>
  );
};

export default ContactList;
