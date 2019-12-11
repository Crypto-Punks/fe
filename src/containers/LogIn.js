import { connect } from 'react-redux';
import UserForm from '../components/user/UserForm';

import { sessionLogIn, clearSessionError } from '../actions/sessionActions';
import { getSessionError } from '../selectors/sessionSelectors';

const mapStateToProps = state => ({
  buttonText: 'Login',
  redirectText: 'Sign Up!',
  redirectLink: '/signup',
  error: getSessionError(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(event, username, password) {
    event.preventDefault();
    dispatch(sessionLogIn(username, password));
  },
  handleClearError() {
    dispatch(clearSessionError());
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
