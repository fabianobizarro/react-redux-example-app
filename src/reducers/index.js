import { combineReducers } from 'redux'
import contacts from './contacts';
import selectedContact from './selectedContact';
import filter from './filter';

export default combineReducers({
  contacts,
  selectedContact,
  filter
});
