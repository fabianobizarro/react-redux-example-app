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
                <div id="form-contact" className="card">
                    <div className="card-block">
                        <h4 className="card-title">Add Contact</h4>

                        <form onSubmit={e => { e.preventDefault(); this.addContact(); }} className="form-inline">
                            <div className="form-group">
                                <input type="text" name="name" placeholder="Name" className="form-control mb-2 mr-sm-2 mb-sm-0"
                                    value={this.state.name} onChange={this.handleChange} />
                            </div>

                            <div className="form-group">
                                <input type="text" name="email" className="form-control mb-2 mr-sm-2 mb-sm-0"
                                    placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                            </div>

                            <button type="submit" className="btn btn-primary" disabled={!this.formValid()}>Add</button>
                        </form>

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