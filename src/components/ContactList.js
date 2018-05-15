import React from 'react';
import ContactCard from './ContactCard';
import Filter from './Filter';
import { connect } from 'react-redux';

export const ContactList = ({ contacts, state }) => {
    if (!contacts)
        return null;
    else
        return (
            <div classID="contactlist" id="contact-list" className="box">
                <div className="list-group-item">
                    <Filter />
                </div>
                <hr />
                {
                    contacts.map((e, i) =>
                        <ContactCard key={i} contact={e} />)
                }
            </div>
        )
};

const getContacts = (contacts, filter) => {

    let regex = new RegExp(filter);

    if (filter === 'ALL')
        return contacts;
    else
        return contacts.filter(c => { return regex.test(c.name) || regex.test(c.email) });

}

const mapStateToProps = (state) => {
    return {
        contacts: getContacts(state.contacts, state.filter),
        state: state
    }
};

const ContactLiostContainer = connect(mapStateToProps, null)(ContactList);

export default ContactLiostContainer;