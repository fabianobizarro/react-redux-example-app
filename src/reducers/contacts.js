import * as types from '../actions/actionTypes';
import getUUID from '../utils/uuid';

export default (state = [], action) => {

  switch (action.type) {
    case types.ADD_CONTACT:
      return [
        ...state,
        {
          id: getUUID(),
          name: action.contact.name,
          email: action.contact.email
        }
      ]
    case types.REMOVE_CONTACT:
      return state.filter(e => e.id !== action.id)
    default:
      return state;
  }
};
