import { fetchPortfolio, changeWatchList } from '../services/portfolio';

export const UPDATE_PORTFOLIO = 'UPDATE_PORTFOLIO';
export const getPortfolio = () => dispatch => {
  return fetchPortfolio()
    .then(portfolio => {
      dispatch({
        type: UPDATE_PORTFOLIO,
        payload: portfolio
      });
    });
};

export const ADD_REMOVE_WATCHLIST = 'ADD_REMOVE_WATCHLIST';
export const toggleWatchList = (watchList, newCoin) => dispatch => {
  return changeWatchList(watchList, newCoin)
    .then(portfolio => {
      dispatch({
        type: ADD_REMOVE_WATCHLIST,
        payload: portfolio.watchList
      });
    });
};
