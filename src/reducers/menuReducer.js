import { TOGGLE_OPEN_MENU } from '../actions/menuActions';

const initialState = {
  openMenu: false,
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case TOGGLE_OPEN_MENU:
      return { ...state, openMenu: !state.openMenu };
    default:
      return state;
  }
}
