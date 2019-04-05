import React from 'react';

const ContactSummary = ({ contact }) => {
  // const id = props.match.params.id;
  console.log('from contactdetails' + contact);

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
};

export default ContactSummary;
