import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getOpenMenu } from '../../selectors/menuSelectors';
import styles from '../hamburger-menu/AboutUsMenu.css';


const AboutUsMenu = () => {
  const openMenu = useSelector(getOpenMenu);

  return (
    <div className={`${styles.AboutUsMenu} ${openMenu ? styles.open : styles.closed}`} >
      <h1>About Crypto Trades</h1>
      <p>Crypto Trades was conceived as a way to practice trading in crypto currencies, using real time statics with fake money!</p>
      <p>Upon signing up to Crypto Trades, you will be given $100,000 to play with! ...how kind of us.</p>
      <p>On your Crypto Trades portfolio page, check out how all of your current assets are doing</p>
      <p>Check out all the available coins to trade in Crypto Trades on the all coins page. Add to your watching list, click on a coin to get more details about each coin.</p>
      <p>Go to the transaction page to do your trading. Put in which currency you want to exchange from and to, and put in an amount, the other amount will automatically fill with the rate of exchange.</p>
      <p>Just like in the real world, if you run out of money, you will not be able to trade anymore. So be smart!</p>
      <Link to='/about'>
        About Developers!
      </Link>
    </div >
  );
};

export default AboutUsMenu;
