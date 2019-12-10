import { UPDATE_PORTFOLIO } from '../actions/portfolioActions';

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
    default:
      return state;
  }
}
