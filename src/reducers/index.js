import { combineReducers } from 'redux';
import session from './sessionReducer';
import portfolio from './portfolioReducer';
import menu from './menuReducer';

export default combineReducers({
  session,
  portfolio,
  menu
});
