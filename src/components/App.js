import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSessionId, getSessionLoading } from '../selectors/sessionSelectors';
import { sessionVerify } from '../actions/sessionActions';
import Signup from '../containers/SignUp';
import SignIn from '../containers/SignIn';
import SignOut from '../containers/SignOut';

const PrivateRoute = ({ ...rest }) => {
  const sessionId = useSelector(getSessionId);
  const loading = useSelector(getSessionLoading);
  const dispatch = useDispatch();
  
  useEffect(()=> {
    if(!sessionId) dispatch(sessionVerify());
  }, []);
  
  if(loading) return <h1>Loading...</h1>;


  if(!loading && !sessionId) return <Redirect to="/signup"/>;

  return <Route {...rest} />;
};

export default function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={SignOut}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={Signup}/>
      </Switch>
    </Router>
  );
}
