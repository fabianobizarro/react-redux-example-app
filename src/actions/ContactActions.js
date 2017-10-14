import * as type from './actionTypes';

export const addContact = (contact) => ({
    type: type.ADD_CONTACT,
    contact: contact
});

export const removeContact = (id) => ({
    type: type.REMOVE_CONTACT,
    id: id
});

export const selectContact = (contact) => ({
    type: type.SELECT_CONTACT,
    contact
});

export const unselectContact = () => ({
    type: type.UNSELECT_CONTACT
});

export const updateContact = (contact) => ({
    type: type.UPDATE_CONTACT,
    contact
});