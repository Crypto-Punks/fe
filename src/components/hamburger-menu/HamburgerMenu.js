import React from 'react';
import { Link } from 'react-router-dom';
import SignOut from '../../containers/SignOut';
import styles from '../hamburger-menu/HamburgerMenu.css'

const HamburgerMenu = () => {
  return (
    <div className={styles.HamburgerMenu}>
      <nav>
        <Link to='/home'>Home image</Link>
        <Link to='/portfolio'>Portfolio image</Link>
        <Link to='/transaction'>Transaction image</Link>
        <SignOut>Signout image</SignOut>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
