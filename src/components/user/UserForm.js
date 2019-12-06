import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSessionId } from '../../selectors/sessionSelectors';


const UserForm = ({ buttonText, redirectText, redirectLink, error, handleSubmit, handleClearError }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const sessionId = useSelector(getSessionId);

  if(sessionId) return <Redirect to="/" />;

  return (
    <>
      {error && <span>{error}</span>}
      <form onSubmit={event => handleSubmit(event, username, password)}>
        <input type="text" value={username} onChange={({ target }) => setUsername(target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={({ target }) => setPassword(target.value)} placeholder="Password" />
        <button>{buttonText}</button>
      </form>
      <Link to={redirectLink} onClick={()=> handleClearError()}>{redirectText}</Link>
    </>
  );
};

UserForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  redirectText: PropTypes.string.isRequired,
  redirectLink: PropTypes.string.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  handleClearError: PropTypes.func.isRequired
};

export default UserForm;

