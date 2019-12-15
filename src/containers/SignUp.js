import { connect } from 'react-redux';
import UserForm from '../components/user/UserForm';
import { sessionSignUp, clearSessionError } from '../actions/sessionActions';
import { safariSessionSignUp } from '../actions/safariSessionActions';
import { safari } from '../components/App';
import { getSessionError } from '../selectors/sessionSelectors';

const mapStateToProps = state => ({
  buttonText: 'Sign Up',
  redirectText: 'Login!',
  redirectLink: '/login',
  error: getSessionError(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(event, username, password) {
    event.preventDefault();
    if(safari()) dispatch(safariSessionSignUp(username, password));
    if(!safari()) dispatch(sessionSignUp(username, password));
  },
  handleClearError() {
    dispatch(clearSessionError());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
