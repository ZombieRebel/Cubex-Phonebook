import React, { Component } from 'react';
import ContactList from '../contacts/ContactList';

class Dashboard extends Component {
  render() {
    return (
      <div className='ui container'>
        <div className=''>
          <div className=''>
            <ContactList />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
