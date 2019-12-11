import { getSearchCall } from '../services/currencies';

export const SET_SEARCHED_LIST = 'SET_SEARCHED_LIST';
export const getSearchedList = query => dispatch => {

  getSearchCall(query)
    .then(coins => {
      dispatch({
        type: SET_SEARCHED_LIST,
        payload: coins
      });
    });
};
