import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import EditContact from "./EditContact";
import { editContact } from "../../store/actions/contactActions";
import ContactDetails from "./ContactDetails";

class ContactDetailsEdit extends Component {
  render() {
    //console.log(this.props.match.params.id);
    return (
      <div>
        {this.props.contact ? (
          <div>
            <ContactDetails contact={this.props.contact} />

            <EditContact
              contact={this.props.contact}
              id={this.props.match.params.id}
            />
          </div>
        ) : (
          <div> REndering </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const contacts = state.firestore.data.contacts;
  const contact = contacts ? contacts[id] : null;
  return {
    contact: contact
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "contacts" }])
)(ContactDetailsEdit);
