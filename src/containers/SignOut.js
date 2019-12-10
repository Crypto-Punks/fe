import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sessionSignOut } from '../actions/sessionActions';
import exitIcon from '../images/exitIcon.png';
import styles from './SignOut.css';



function SignOut({ signOut }) {
  return (
    <button className={styles.SignOut} onClick={() => signOut()}><img src={exitIcon} /></button>
  );
}




const mapDispatchToProps = dispatch => ({
  signOut() {
    dispatch(sessionSignOut());
  }
});


export default connect(
  null,
  mapDispatchToProps
)(SignOut);

SignOut.propTypes = {
  signOut: PropTypes.func.isRequired
};


