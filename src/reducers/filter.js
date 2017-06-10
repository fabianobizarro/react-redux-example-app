import * as types from '../actions/actionTypes';

export default (state = 'ALL', action) => {
    switch (action.type) {
        case types.SET_FILTER:
            if (action.filter != '') 
                return action.filter;
            else
                return 'ALL';
        default:
            return state;
    }
};