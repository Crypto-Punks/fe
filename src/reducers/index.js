import { combineReducers } from 'redux';
import session from './sessionReducer';
import portfolio from './portfolioReducer';
import menu from './menuReducer';
import coins from './coinsReducer';

export default combineReducers({
  session,
  portfolio,
  menu,
  coins
});
