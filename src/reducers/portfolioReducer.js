import { UPDATE_PORTFOLIO, ADD_REMOVE_WATCHLIST, ADD_REMOVE_INVESTED, UPDATE_NET_WORTH } from '../actions/portfolioActions';

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
    case UPDATE_NET_WORTH:
      return { ...state, netWorth: action.payload };
    default:
      return state;
  }
}
