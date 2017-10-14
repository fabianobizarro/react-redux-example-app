import React from 'react';
import { removeContact, selectContact } from '../actions/ContactActions';
import { connect } from 'react-redux';

export const ContactCard = ({ selectedId, onRemove, contact, onSelect }) => {
    return (

        <article className="media">
            <div className="media-content">
                <h5 className="title is-5"> {contact.name} </h5>
                <p className="subtitle is-5"> {contact.email} </p>
            </div>
            <div className="media-right">
                <small> <a href="javascript:void(0)" onClick={e => onSelect(contact)}> View </a> </small> -
                <small> <a href="javascript:void(0)" onClick={e => onRemove(contact.id)}> Remove </a> </small>
            </div>
        </article>
    )
};

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