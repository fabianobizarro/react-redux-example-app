import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addContact } from '../actions/ContactActions'

class ContactForm extends Component {

    constructor({ props, dispatch }) {
        super(props);

        this.state = {
            name: '',
            email: ''
        };

        this.dispatch = dispatch;
        this.handleChange = this.handleChange.bind(this);
    }

    addContact(t) {
        this.dispatch(addContact(this.state));
        this.setState({ name: '', email: '' });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    formValid() {
        return this.state.name !== '' && this.state.email !== '';
    }

    render() {
        if (this.props.selectedContact)
            return null;
        else
            return (
                <div id="form-contact">
                    <div className="card">
                            <div className='card-header'>
                                <h4 className="card-header-title">Add Contact</h4>
                            </div>
                        <div className='card-content'>
                            <form onSubmit={e => { e.preventDefault(); this.addContact(); }} className="form-inline">
                                <div className="field">
                                    <input type="text" name="name" placeholder="Name" className="input"
                                        value={this.state.name} onChange={this.handleChange} />
                                </div>

                                <div className="field">
                                    <input type="text" name="email" className='input'
                                        placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                                </div>

                                <button type="submit" className="button is-success" disabled={!this.formValid()}>Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            );
    }
}

ContactForm.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        selectedContact: Object.keys(state.selectedContact).length > 0
    }
}

ContactForm = connect(mapStateToProps)(ContactForm);

export default ContactForm;