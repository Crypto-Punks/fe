import { safariSignUp, safariLogIn, safariSignOut, safariVerifySession } from '../services/safariAuth';
import { SET_OPEN_MENU_FALSE } from './menuActions';
import { SET_SESSION, SET_SESSION_LOADING_TRUE, SET_SESSION_ERROR, SET_SESSION_SIGN_OUT } from './sessionActions';


export const safariSessionSignUp = (username, password) => dispatch => {
  dispatch({
    type: SET_SESSION_LOADING_TRUE
  });
  
  return safariSignUp(username, password)
    .then(user => {
      dispatch({
        type: SET_SESSION,
        payload: user
      });
    })
    .catch(err => {
      dispatch({
        type: SET_SESSION_ERROR,
        payload: err
      });
    });
};

export const safariSessionLogIn = (username, password) => dispatch => {
  dispatch({
    type: SET_SESSION_LOADING_TRUE
  });
  return safariLogIn(username, password)
    .then(user => {
      dispatch({
        type: SET_SESSION,
        payload: user
      });
    })
    .catch(err => {
      dispatch({
        type: SET_SESSION_ERROR,
        payload: err
      });
    });
};

export const safariSessionSignOut = () => dispatch => {
  dispatch({
    type: SET_SESSION_LOADING_TRUE
  });
  return safariSignOut()
    .then(() => {
      dispatch({
        type: SET_SESSION_SIGN_OUT
      });
      dispatch({
        type: SET_OPEN_MENU_FALSE
      });
    });
};

export const safariSessionVerify = () => dispatch => {
  dispatch({
    type: SET_SESSION_LOADING_TRUE
  });

  return safariVerifySession()
    .then(user => {
      dispatch({
        type: SET_SESSION,
        payload: user
      });
    })
    .catch(()=> {
      dispatch({
        type: SET_SESSION,
        payload: null
      });
    });
};

