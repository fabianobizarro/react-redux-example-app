import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions/ContactActions';

export class EditContactForm extends Component {

    constructor({ props, dispatch }) {
        super(props);

        this.state = {
            name: '',
            email: '',
            id: ''
        }

        this.dispatch = dispatch;
        this.handleChange = this.handleChange.bind(this);
        this.editContact = this.editContact.bind(this);
        this.removeContact = this.removeContact.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }

    componentWillMount() {

        this.setState({
            name: this.props.name,
            email: this.props.email,
            id: this.props.id
        });
    }

    formValid() {
        return this.state.name !== '' && this.state.email !== '';
    }

    editContact(e) {
        this.dispatch(actions.updateContact(this.state));
        this.dispatch(actions.unselectContact());
    }

    removeContact(e) {
        this.dispatch(actions.removeContact(this.props.id));
    }

    cancelEdit() {
        this.dispatch(actions.unselectContact());
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {

        return (
            <div id="form-contact" className="card">
                <div className="card-block">
                    <h4 className="card-title">Edit Contact - {this.props.name}</h4>

                    <form onSubmit={e => { e.preventDefault(); }} className="form-inline">
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Name" className="form-control mb-2 mr-sm-2 mb-sm-0"
                                value={this.state.name} onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <input type="text" name="email" className="form-control mb-2 mr-sm-2 mb-sm-0"
                                placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                        </div>

                        <button type="submit" className="btn btn-warning" onClick={this.editContact} disabled={!this.formValid()}>Edit</button> |
                            <button type="submit" className="btn btn-danger" onClick={this.removeContact}>Remove</button> |
                            <button type="submit" className="btn btn-white" onClick={this.cancelEdit}>Cancel</button>
                    </form>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.selectedContact.id,
        name: state.selectedContact.name,
        email: state.selectedContact.email,
        selectedContact: Object.keys(state.selectedContact).length > 0,
    }
}

let Container = connect(mapStateToProps, null)(EditContactForm);

export default Container;
