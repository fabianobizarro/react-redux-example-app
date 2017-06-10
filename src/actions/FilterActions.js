import * as types from './actionTypes';

export const setFilter = (filter) =>{
    return {
        type: types.SET_FILTER,
        filter: filter
    }
}