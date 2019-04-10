import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import EditContact from "./EditContact";
import { editContact } from "../../store/actions/contactActions";

const ContactDetails = props => {
  const { contact } = props;
  if (contact) {
    return (
      <div className="ui container">
        <div className="ui centered grid">
          <div className="middle aligned six column row">
            <div className="three wide column">
              <span className="header">
                <h4>{contact.firstName + " " + contact.lastName}</h4>
              </span>
            </div>

            <div className="three wide column meta">
              <span>
                <h4>{contact.phone}</h4>
              </span>
            </div>

            <div className="two wide column description">
              <h4>{contact.companyName}</h4>
            </div>

            <div className="three wide column description">
              <h4>{contact.email}</h4>
            </div>

            <div className="three wide column">
              <img
                className="ui medium bordered rounded image"
                src={contact.photo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Loading contact details</p>;
  }
};

export default ContactDetails;
