import React from 'react';
import './App.css';

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import EditContactForm from './components/EditContactForm';

import { connect } from 'react-redux';

const App = ({ contactSelected }) => {
  return (
    <div className="App container">
      <br />
      <div className="row">
        <div className="col-md-12">
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