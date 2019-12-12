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
import LogIn from '../containers/LogIn';
import SignOut from '../containers/SignOut';
import Hamburger from './Hamburger/Hamburger';
import Portfolio from '../containers/Portfolio';
import AllCoins from '../containers/AllCoins';
import CoinDetail from '../containers/CoinDetail';
import Transaction from '../containers/Transaction';
import AboutUs from '../components/about-us/AboutUsList';

const PrivateRoute = ({ ...rest }) => {
  const sessionId = useSelector(getSessionId);
  const loading = useSelector(getSessionLoading);
  const dispatch = useDispatch();
  
  useEffect(()=> {
    if(!sessionId) dispatch(sessionVerify());
  }, []);
  
  if(loading) return <h1>Loading...</h1>;


  if(!loading && !sessionId) return <Redirect to="/login"/>;

  return <Route {...rest} />;
}; 

export default function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Portfolio}/>
        <Route path="/login" component={LogIn}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/about" component={AboutUs}/>
        <PrivateRoute path="/signout" component={SignOut}/>
        <PrivateRoute path="/coins" component={AllCoins}/>
        <PrivateRoute path="/detail/:id" component={CoinDetail}/>
        <PrivateRoute path="/transaction" component={Transaction}/>
      </Switch>
      <Hamburger />
    </Router>
  );
}
