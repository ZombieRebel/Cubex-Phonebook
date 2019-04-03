import React from 'react';

const ContactDetails = () => {
  //const id = props.match.params.id;
  //console.log(id);

  return (
    <div className='ui five column grid'>
      <div className='column'>
        <span className='header'>Rustam Shumniy</span>
      </div>

      <div className='column meta'>
        <span>+380993203203</span>
      </div>

      <div className='column description'>
        <p>Company Name</p>
      </div>

      <div className='column description'>email@email.com</div>

      <div className='column image'>
        <img src='https://randomuser.me/api/portraits/med/men/65.jpg' />
      </div>
    </div>
  );
};

export default ContactDetails;
