import { connect } from 'react-redux';
import UserForm from '../components/user/UserForm';
import { sessionSignup, clearSessionError } from '../actions/sessionActions';
import { getSessionError } from '../selectors/sessionSelectors';

const mapStateToProps = state => ({
  buttonText: 'Sign Up',
  redirectText: 'Login!',
  redirectLink: '/signin',
  error: getSessionError(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(event, username, password) {
    event.preventDefault();
    dispatch(sessionSignup(username, password));
  },
  handleClearError() {
    dispatch(clearSessionError());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
