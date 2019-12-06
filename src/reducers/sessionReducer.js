import { 
  SET_SESSION, 
  SET_SESSION_LOADING, 
  SET_SESSION_ERROR, 
  CLEAR_SESSION_ERROR,
  SET_SESSION_SIGN_OUT } from '../actions/sessionActions';

const initialState = {
  username: null,
  _id: null,
  loading: true,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_SESSION_LOADING:
      return { ...state, loading: true, };
    case SET_SESSION:
      return { ...state, ...action.payload, loading: false, error: null };
    case SET_SESSION_ERROR:
      return { ...state, loading: false, error: action.payload };
    case CLEAR_SESSION_ERROR:
      return { ...state, error: null };
    case SET_SESSION_SIGN_OUT:
      return { ...state, loading: false, username: null, _id: null, error: null };
    default:
      return state;
  }
}
