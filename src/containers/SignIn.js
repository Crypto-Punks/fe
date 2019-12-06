import { connect } from 'react-redux';
import UserForm from '../components/user/UserForm';
import { sessionSignIn, clearSessionError } from '../actions/sessionActions';
import { getSessionError } from '../selectors/sessionSelectors';

const mapStateToProps = state => ({
  buttonText: 'Sign In',
  redirectText: 'New User? Sign Up!',
  redirectLink: '/signup',
  error: getSessionError(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(event, username, password) {
    event.preventDefault();
    dispatch(sessionSignIn(username, password));
  },
  handleClearError() {
    dispatch(clearSessionError());
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
