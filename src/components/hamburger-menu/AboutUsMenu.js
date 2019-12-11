import React from 'react';
import { useSelector } from 'react-redux';
import { getOpenMenu } from '../../selectors/menuSelectors';
import styles from '../hamburger-menu/navMenu.css';


const AboutUsMenu = () => {
  const openMenu = useSelector(getOpenMenu);

  return (
    <div className={`${styles.NavMenu} ${openMenu ? styles.open : styles.closed}`} >
      <h1>About Crypto Trader</h1>
    </div >
  );
};

export default AboutUsMenu;
