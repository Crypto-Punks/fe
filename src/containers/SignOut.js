import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sessionSignOut } from '../actions/sessionActions';



function SignOut({ signOut }) {
  return (  
    <button onClick={() => signOut()}>Sign Out</button>
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


