import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ContactDetailsEdit from "./components/contacts/ContactDetailsEdit";
import CreateContact from "./components/contacts/CreateContact";
import ContactSummary from "./components/contacts/ContactSummary";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/contact/:id" component={ContactDetailsEdit} />
            <Route path="/create" component={CreateContact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
