import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { editContact } from "../../store/actions/contactActions";

class EditContact extends Component {
  state = {
    firstName: this.props.contact.firstName,
    lastName: this.props.contact.lastName,
    phone: this.props.contact.phone,
    email: this.props.contact.phone,
    companyName: this.props.contact.companyName,
    id: this.props.id
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("EDIT ", this.state.firstName);
    this.props.editContact(this.state);
    //this.props.history.push("/");
  };

  render() {
    if (this.props.contact) {
      //console.log("ID" + this.props.id);
      return (
        <div className="ui centered grid">
          <form className="ui form" onSubmit={this.handleSubmit}>
            <div className="field">
              <input
                type="text"
                id="firstName"
                placeholder={this.props.contact.firstName}
                onChange={this.handleChange}
              />
              <input
                type="text"
                id="lastName"
                placeholder={this.props.contact.lastName}
                onChange={this.handleChange}
              />
              <input
                type="tel"
                id="phone"
                placeholder="123-123-1234"
                onChange={this.handleChange}
              />
              <input
                type="text"
                id="companyName"
                placeholder={this.props.contact.companyName}
                onChange={this.handleChange}
              />
              <input
                type="email"
                id="email"
                placeholder="email@email.com"
                onChange={this.handleChange}
              />
            </div>
            <button className="ui button" type="submit">
              Edit
            </button>
          </form>
        </div>
      );
    } else {
      return <div>Not Loaded yet</div>;
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);

  const id = ownProps.id;

  //const contact = contacts ? contacts[id] : null;
  //console.log("dispatch " + id);
  return {
    editContact: contact => dispatch(editContact(contact))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EditContact);
