import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editContact } from '../../store/actions/contactActions';
import DeleteContact from './DeleteContact';

class EditContact extends Component {
  state = {
    firstName: this.props.contact.firstName,
    lastName: this.props.contact.lastName,
    phone: this.props.contact.phone,
    email: this.props.contact.email,
    companyName: this.props.contact.companyName,
    photo: this.props.contact.photo,
    id: this.props.id
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmitEdit = e => {
    e.preventDefault();

    this.props.editContact(this.state);
    this.props.history.push('/');
  };

  render() {
    if (this.props.contact) {
      return (
        <div className='ui container'>
          <div className='ui two column centered grid'>
            <div className='column'>
              <h1>Change Contact Details</h1>
              <form className='ui form'>
                <div className='ui field'>
                  <label htmlFor='firstName'>First Name</label>
                  <input
                    type='text'
                    id='firstName'
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className='field'>
                  <label htmlFor='lastName'>Last Name</label>
                  <input
                    type='text'
                    id='lastName'
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className='field'>
                  <label htmlFor='phone'>Phone Number</label>
                  <input
                    type='tel'
                    id='phone'
                    value={this.state.phone}
                    pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className='field'>
                  <label htmlFor='companyName'>Company Name</label>
                  <input
                    type='text'
                    id='companyName'
                    value={this.state.companyName}
                    onChange={this.handleChange}
                    required
                  />
                </div>

                <div className='field'>
                  <label htmlFor='email'>Email Address</label>
                  <input
                    type='email'
                    id='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className='field'>
                  <label htmlFor='photo'>Image URL</label>
                  <input
                    type='text'
                    id='photo'
                    value={this.state.photo}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <button
                  className='positive ui button'
                  type='submit'
                  onClick={this.handleSubmitEdit}
                >
                  Edit
                </button>

                <DeleteContact
                  id={this.props.id}
                  history={this.props.history}
                />
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>Not Loaded yet</div>;
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.id;
  return {
    editContact: contact => dispatch(editContact(contact))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EditContact);
