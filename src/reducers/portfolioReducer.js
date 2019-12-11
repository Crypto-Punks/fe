import { UPDATE_PORTFOLIO, ADD_REMOVE_WATCHLIST, ADD_REMOVE_INVESTED } from '../actions/portfolioActions';

const initialState = {
  netWorth: 100000.00,
  investedCoins: [],
  watchList: [],
  top100: [],
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_PORTFOLIO:
      return { ...state, ...action.payload };
    case ADD_REMOVE_WATCHLIST:
      return { ...state, watchList: action.payload };
    case ADD_REMOVE_INVESTED:
      return { ...state, investedCoins: action.payload };
    default:
      return state;
  }
}
