import React, { Component } from 'react';
import './App.css';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import EditContactForm from './components/EditContactForm';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <br />
        <div className="row">
          <div className="col-md-12">
            <ContactForm />
          </div>
        </div>
        <br />
        <ContactList />
        <EditContactForm />
      </div>
    );
  }
}

export default App;
