import React from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NetWorth from '../components/net-worth/NetWorth';
import AssetList from '../components/assets/AssetList';
import HamburgerMenu from '../components/hamburger-menu/HamburgerMenu';
import styles from '../containers/Portfolio.css';

const Portfolio = ({ netWorth, activeCoins }) => {
  return (
    <div>
      <h1 className={styles.Hello}>HELLO WORLD</h1>
      <NetWorth netWorth={netWorth} />
      {//net worth chart
        //diversification chart
      }
      <AssetList items={activeCoins} />
      <HamburgerMenu className={styles.HamburgerMenu}/>
    </div>
  );
};

Portfolio.propTypes = {
  netWorth: PropTypes.string.isRequired,
  activeCoins: PropTypes.arrayOf(PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired
  }))
};

const mapStateToProps = state => ({
  //to do: make selectors
  netWorth: getNetWorth(state),
  activeCoins: getActiveCoins(state)
});

export default connect(
  mapStateToProps
)(Portfolio);

export default Portfolio;
