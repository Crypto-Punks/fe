import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SignOut from '../../containers/SignOut';
import styles from '../hamburger-menu/navMenu.css';
import { getOpenMenu } from '../../selectors/menuSelectors';

const NavMenu = () => {
  const openMenu = useSelector(getOpenMenu);
  return (
    <div className={`${styles.NavMenu} ${openMenu ? styles.open : styles.closed}`} >
      <nav>
        <Link to='/home' className={styles.Home}><img></img></Link>
        <Link to='/portfolio'>Portfolio image</Link>
        <Link to='/transaction'>Transaction image</Link>
        <SignOut>Signout image</SignOut>
      </nav>
    </div >
  );
};

export default NavMenu;
