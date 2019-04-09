import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class EditContact extends Component {
  render() {
    return (
      <div className='ui centered grid'>
        <form className='ui form'>
          <div className='field'>
            <input
              type='text'
              name='first-name'
              placeholder={contact.firstName}
            />
            <input
              type='text'
              name='last-name'
              placeholder={contact.lastName}
            />
            <input type='tel' name='phone' placeholder={contact.phone} />
          </div>
          <button className='ui button' type='submit'>
            Edit
          </button>
        </form>
      </div>
    );
  }
}

export default EditContact;
