import React from 'react';
import { Link } from 'react-router-dom';
import SignOut from '../../containers/SignOut';
import PropTypes from 'prop-types';

const HamburgerMenu = ({ openMenu }) => {
  return (
    <nav>
      <Link to='/home'>Home image</Link>
      <Link to='/portfolio'>Portfolio image</Link>
      <Link to='/transaction'>Transaction image</Link>
      <SignOut>Signout image</SignOut>
    </nav>
  );
};

HamburgerMenu.propTypes = {
  openMenu: PropTypes.bool.isRequired
};

export default HamburgerMenu;
