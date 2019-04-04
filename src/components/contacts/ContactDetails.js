import React from "react";

const ContactDetails = ({ contact }) => {
  // const id = props.match.params.id;
  // console.log(id);

  return (
    <div className="ui container">
      <div className="ui centered grid">
        <div className="middle aligned five column row">
          <div className="column">
            <span className="header">
              <h4>{contact.fullname}</h4>
            </span>
          </div>

          <div className="column meta">
            <span>
              <h4>{contact.phone}</h4>
            </span>
          </div>

          <div className="column description">
            <h4>{contact.companyName}</h4>
          </div>

          <div className="column description">
            <h4>{contact.email}</h4>
          </div>

          <div className="column image">
            <img src="https://randomuser.me/api/portraits/med/men/65.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
