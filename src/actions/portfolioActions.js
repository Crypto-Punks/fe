import { fetchPortfolio, changeWatchList, changeInvested } from '../services/portfolio';

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

export const ADD_REMOVE_INVESTED = 'ADD_REMOVE_INVESTED';
export const coinTransaction = (toCurrency, toCurrencyAmount, fromCurrency, fromCurrencyAmount, investedCoins) => dispatch => {
  return changeInvested(toCurrency, toCurrencyAmount, fromCurrency, fromCurrencyAmount, investedCoins)
    .then(portfolio => {
      dispatch({
        type: ADD_REMOVE_INVESTED,
        payload: portfolio.investedCoins
      });
    });
};
