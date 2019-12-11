import { signup, logIn, signOut, verifySession } from '../services/auth';


export const SET_SESSION = 'SET_SESSION';
export const SET_SESSION_LOADING = 'SET_SESSION_LOADING';
export const SET_SESSION_ERROR = 'SET_SESSION_ERROR';

export const sessionSignup = (username, password) => dispatch => {
  dispatch({
    type: SET_SESSION_LOADING
  });
  
  return signup(username, password)
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
    type: SET_SESSION_LOADING
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
    type: SET_SESSION_LOADING
  });
  return signOut()
    .then(() => {
      dispatch({
        type: SET_SESSION_SIGN_OUT
      });
    });
};

export const sessionVerify = () => dispatch => {
  dispatch({
    type: SET_SESSION_LOADING
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

export const CLEAR_SESSION_ERROR = 'CLEAR_SESSION_ERROR';
export const clearSessionError = () => dispatch => {
  dispatch({
    type: CLEAR_SESSION_ERROR
  });
};
