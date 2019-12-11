import { SET_SEARCHED_LIST } from '../actions/coinsActions';

const initialState = {
  searchedList: [],
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_SEARCHED_LIST:
      return { ...state, searchedList: action.payload };
    default:
      return state;
  }
}
