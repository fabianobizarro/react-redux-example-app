import React from 'react';
import './App.css';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import EditContactForm from './components/EditContactForm';

import { connect } from 'react-redux';

const App = ({ contactSelected }) => {
  return (
    <div className="container">
      <br />
      <div className="columns">
        <div className="column">
          {
            contactSelected ? <EditContactForm /> : <ContactForm />
          }
        </div>
      </div>
      <br />
      <ContactList />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    contactSelected: Object.keys(state.selectedContact).length > 0
  }
}

let AppContainer = connect(mapStateToProps)(App);

export default AppContainer;