import { signUp, logIn, signOut, verifySession } from '../services/auth';
import { SET_OPEN_MENU_FALSE } from './menuActions';

export const SET_SESSION = 'SET_SESSION';
export const SET_SESSION_LOADING_TRUE = 'SET_SESSION_LOADING_TRUE';
export const SET_SESSION_LOADING_FALSE = 'SET_SESSION_LOADING_FALSE';
export const SET_SESSION_ERROR = 'SET_SESSION_ERROR';

export const sessionSignUp = (username, password) => dispatch => {
  dispatch({
    type: SET_SESSION_LOADING_TRUE
  });
  
  return signUp(username, password)
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

export const sessionLogIn = (username, password) => dispatch => {
  dispatch({
    type: SET_SESSION_LOADING_TRUE
  });
  return logIn(username, password)
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

export const SET_SESSION_SIGN_OUT = 'SET_SESSION_SIGN_OUT';
export const sessionSignOut = () => dispatch => {
  dispatch({
    type: SET_SESSION_LOADING_TRUE
  });
  return signOut()
    .then(() => {
      dispatch({
        type: SET_SESSION_SIGN_OUT
      });
      dispatch({
        type: SET_OPEN_MENU_FALSE
      });
    });
};

export const sessionVerify = () => dispatch => {
  dispatch({
    type: SET_SESSION_LOADING_TRUE
  });

  return verifySession()
    .then(user => {
      dispatch({
        type: SET_SESSION,
        payload: user
      });
    })
    .catch(() => {
      dispatch({
        type: SET_SESSION,
        payload: null
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
      })
    })
};

export const CLEAR_SESSION_ERROR = 'CLEAR_SESSION_ERROR';
export const clearSessionError = () => dispatch => {
  dispatch({
    type: CLEAR_SESSION_ERROR
  });
};
