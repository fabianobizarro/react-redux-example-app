import React from 'react';
import { removeContact, selectContact } from '../actions/ContactActions';
import { connect } from 'react-redux';

export const ContactCard = ({ onRemove, contact, onSelect }) => (
    <div className="list-group-item list-group-item-action flex-column align-items-start item-contact" >
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1"> {contact.name} </h5>
            <p className="card-options">
                <small> <a href="#"  onClick={e => onSelect(contact)}> View </a> </small> -
                <small> <a href="#"> Edit </a> </small> -
                <small> <a href="#" onClick={e => onRemove(contact.id)}> Remove </a> </small>
            </p>
        </div>
        <p className="mb-1"> {contact.email} </p>
    </div>
)

const mapDispatchToProps = (dispatch) => {
    return {
        onRemove: (id) => {
            dispatch(removeContact(id))
        },
        onSelect: (contact) => {
            dispatch(selectContact(contact))
        }
    }
}

const ContactContainer = connect(null, mapDispatchToProps)(ContactCard);

export default ContactContainer;