import React from 'react';
import { Link } from 'react-router-dom';
import AddContactLink from './AddContactLink';
import SearchContact from '../contacts/SearchContact';

const Navbar = () => {
  return (
    <div className='ui stackable  red inverted secondary menu'>
      <nav className='ui container'>
        <Link to='/' className='item'>
          <h1>Cubex Phonebook</h1>
        </Link>

        <div className='right item'>
          <AddContactLink className='' />
          <SearchContact />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
