import { combineReducers } from 'redux';
import session from './sessionReducer';
import portfolio from './portfolioReducer';

export default combineReducers({
  session,
  portfolio
});
