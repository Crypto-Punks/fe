import { fetchPortfolio } from '../services/portfolio';

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
