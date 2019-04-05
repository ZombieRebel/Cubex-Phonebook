import React, { Component } from 'react';
import ContactList from '../contacts/ContactList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


class Dashboard extends Component {
  render() {
    //console.log(this.props);
    const { contacts } = this.props;
    return (
      <div className=''>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    contacts: state.firestore.ordered.contacts
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'contacts' }])
)(Dashboard);
