import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../../store/actions/contactActions';

class DeleteContact extends Component {
  state = {
    id: this.props.id
  };

  handleSubmitDelete = e => {
    e.preventDefault();
    this.props.deleteContact(this.state);
    this.props.history.push('/');
  };

  render() {
    if (this.props.id) {
      return (
        <button
          className='negative ui button'
          name={this.props.name}
          onClick={this.handleSubmitDelete}
        >
          DELETE
        </button>
      );
    } else {
      return <div>Rendering Delete button</div>;
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.id;
  return {
    deleteContact: contact => dispatch(deleteContact(contact))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DeleteContact);
