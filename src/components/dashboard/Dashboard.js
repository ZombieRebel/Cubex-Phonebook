import React, { Component } from "react";
import ContactList from "../contacts/ContactList";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    //console.log(this.props);
    const { contacts } = this.props;
    return (
      <div className="">
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.contacts
  };
};

export default connect(mapStateToProps)(Dashboard);
