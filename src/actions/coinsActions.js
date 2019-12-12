import { getSearchCall } from '../services/currencies';

export const SET_SEARCHED_LIST = 'SET_SEARCHED_LIST';
export const SET_SEARCHED_LIST_ERROR = 'SET_SEARCHED_LIST_ERROR';
export const getSearchedList = query => dispatch => {

  getSearchCall(query)
    .then(coins => {
      if(coins.length === 0){
        dispatch({ type: SET_SEARCHED_LIST_ERROR });
      } 
      else {
        dispatch({
          type: SET_SEARCHED_LIST,
          payload: coins
        });
      }
    });
};

export const CLEAR_SEARCHED_LIST = 'CLEAR_SEARCHED_LIST';
