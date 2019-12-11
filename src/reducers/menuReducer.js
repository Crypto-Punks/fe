import { TOGGLE_OPEN_MENU, SET_OPEN_MENU_FALSE } from '../actions/menuActions';

const initialState = {
  openMenu: false,
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case TOGGLE_OPEN_MENU:
      return { ...state, openMenu: !state.openMenu };
    case SET_OPEN_MENU_FALSE:
      return { ...state, openMenu: false };
    default:
      return state;
  }
}
