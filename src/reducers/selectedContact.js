import { SELECT_CONTACT, UNSELECT_CONTACT, REMOVE_CONTACT } from '../actions/actionTypes'

export default (state = {}, action) => {
    switch (action.type) {
        case SELECT_CONTACT:
            return {
                id: action.contact.id,
                name: action.contact.name,
                email: action.contact.email
            }
        case UNSELECT_CONTACT:
            return {}
        case REMOVE_CONTACT:
            if (state.id) {
                if (action.id === state.id)
                    return {};
            }
            return state;
        default:
            return state;
    }
};