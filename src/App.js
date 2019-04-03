import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ContactDetails from './components/contacts/ContactDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/contact/:id' component={ContactDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
