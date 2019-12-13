import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getOpenMenu } from '../../selectors/menuSelectors';
import styles from '../hamburger-menu/AboutUsMenu.css';


const DeveloperMenu = () => {
  const openMenu = useSelector(getOpenMenu);

  return (
    <div className={`${styles.AboutUsMenu} ${openMenu ? styles.open : styles.closed}`} >
      <Link to='/'>
        Return to Login Page
      </Link>
    </div>
  );
};

export default DeveloperMenu;
