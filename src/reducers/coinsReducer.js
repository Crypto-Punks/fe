import { SET_SEARCHED_LIST, CLEAR_SEARCHED_LIST, SET_SEARCHED_LIST_ERROR } from '../actions/coinsActions';

const initialState = {
  searchedList: [],
  searchedError: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_SEARCHED_LIST:
      return { ...state, searchedList: action.payload, searchedError: null };
    case CLEAR_SEARCHED_LIST:
      return { ...state, searchedList: [], searchedError: null };
    case SET_SEARCHED_LIST_ERROR:
      return { ...state, searchedError: 'No Results Found' };
    default:
      return state;
  }
}
