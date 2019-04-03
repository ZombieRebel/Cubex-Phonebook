import React from 'react';
import { NavLink } from 'react-router-dom';

const AddContactLink = () => {
  return (
    <button className='compact ui button'>
      <NavLink to='/'>Add Contact</NavLink>
    </button>
  );
};

export default AddContactLink;
