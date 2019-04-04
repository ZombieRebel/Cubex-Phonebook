import React, { Component } from "react";

class CreateContact extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    photo: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="ui container">
        <form className="ui fluid form" onSubmit={this.handleSubmit}>
          <h2 className="">Add new contact</h2>

          <div className="field">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstName"
              required
              placeholder="First Name"
              onChange={this.handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              required
              onChange={this.handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="email@email.com"
              required
              onChange={this.handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="123-123-1234"
              required
              onChange={this.handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="companyname">Company Name</label>
            <input
              type="text"
              id="companyname"
              placeholder="CubeX Inc."
              onChange={this.handleChange}
            />
          </div>
          <button className="ui red button">Create Contact</button>
        </form>
      </div>
    );
  }
}

export default CreateContact;
