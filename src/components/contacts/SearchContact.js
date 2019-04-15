import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchContact } from '../../store/actions/contactActions';

class SearchContact extends Component {
  state = {
    searchString: ''
  };

  handleChange = e => {
    this.setState({
      searchString: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    /*
    console.log(
      'SEARCH SUBMITTED',
      this.props.contacts.firestore.ordered.contacts
    );
    */

    //console.log('searchString', this.state.searchString);
    this.props.searchContact(
      this.props.contacts.firestore.ordered.contacts,
      this.state.searchString
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className='ui right icon input'>
            <input
              type='text'
              placeholder='Search...'
              onChange={this.handleChange}
            />
            <i className='search icon' />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const contacts = state;
  //const contact = contacts ? contacts[id] : null;
  //console.log('mapStateToProps', contacts);
  return {
    contacts: contacts
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.id;
  return {
    searchContact: (contacts, searchString) =>
      dispatch(searchContact(contacts, searchString))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContact);
