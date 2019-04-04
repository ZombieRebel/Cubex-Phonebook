import contactReducer from './contactReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  contacts: contactReducer
});

export default rootReducer;
