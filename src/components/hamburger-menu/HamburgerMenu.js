import React from 'react';
import { Link } from 'react-router-dom';
import SignOut from '../../containers/SignOut';

const HamburgerMenu = () => {
  return (
    <nav>
      <Link to='/home'>Home image</Link>
      <Link to='/portfolio'>Portfolio image</Link>
      <Link to='/transaction'>Transaction image</Link>
      <SignOut>Signout image</SignOut>
    </nav>
  );
};

export default HamburgerMenu;
