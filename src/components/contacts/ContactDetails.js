import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ContactDetails = props => {
  const { contact } = props;
  if (contact) {
    return (
      <div className='ui container'>
        <div className='ui centered grid'>
          <div className='middle aligned five column row'>
            <div className='column'>
              <span className='header'>
                <h4>{contact.firstName + ' ' + contact.lastName}</h4>
              </span>
            </div>

            <div className='column meta'>
              <span>
                <h4>{contact.phone}</h4>
              </span>
            </div>

            <div className='column description'>
              <h4>{contact.companyName}</h4>
            </div>

            <div className='column description'>
              <h4>{contact.email}</h4>
            </div>

            <div className='column'>
              <img
                className='ui tiny bordered rounded image'
                src={contact.photo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Loadin project</p>;
  }
};

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
)(ContactDetails);
