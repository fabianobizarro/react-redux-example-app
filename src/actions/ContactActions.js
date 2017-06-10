import * as type from './actionTypes';

export const addContact = (contact) => {
    return {
        type: type.ADD_CONTACT,
        contact: contact
    }
}

export const removeContact = (id) => {
    return {
        type: type.REMOVE_CONTACT,
        id: id
    }
}

export const selectContact = (contact) => {
    return {
        type: type.SELECT_CONTACT,
        contact
    }
}

export const unselectContact = () => {
    return {
        type: type.UNSELECT_CONTACT
    }
}