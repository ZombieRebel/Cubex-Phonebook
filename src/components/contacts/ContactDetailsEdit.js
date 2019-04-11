import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import EditContact from './EditContact';
import ContactDetails from './ContactDetails';

class ContactDetailsEdit extends Component {
  render() {
    console.log('FROM CONTACT DETAILS EDIT', this.props);
    return (
      <div>
        {this.props.contact ? (
          <div>
            <ContactDetails contact={this.props.contact} />

            <EditContact
              contact={this.props.contact}
              id={this.props.match.params.id}
              history={this.props.history}
            />
          </div>
        ) : (
          <div>
            <h4> Loading...</h4>{' '}
          </div>
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
  firestoreConnect([{ collection: 'contacts' }])
)(ContactDetailsEdit);
