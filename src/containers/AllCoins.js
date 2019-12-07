import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NetWorth from '../components/net-worth/NetWorth';
import HamburgerMenu from '../components/hamburger-menu/HamburgerMenu';
import CoinList from '../components/coin-summary/CoinList';
import CoinSearchForm from '../components/coin-search/CoinSearchForm';
import { getInvestedCoins, getNetWorth, getWatchList } from '../selectors/portfolioSelectors';
import { getTop100Currencies } from '../services/currencies';

const AllCoins = ({ netWorth, investedCoins, watchList }) => {

  let allCoins = [];

  useEffect(() => {
    getTop100Currencies()
      .then(coins => {
        allCoins = coins;
      });
  }, []);

  return (
    <div>
      <NetWorth netWorth={netWorth} />
      <CoinList items={investedCoins} />
      {watchList.length !== 0 && <CoinList items={watchList} />}
      <CoinSearchForm />
      <CoinList items={allCoins} />
      <HamburgerMenu />
    </div>
  );
};

AllCoins.propTypes = {
  netWorth: PropTypes.number.isRequired,
  investedCoins: PropTypes.arrayOf(PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    changePercent24Hr: PropTypes.number.isRequired
  })).isRequired,
  watchList: PropTypes.arrayOf(PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    changePercent24Hr: PropTypes.number.isRequired
  })).isRequired,
  allCoins: PropTypes.arrayOf(PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    changePercent24Hr: PropTypes.number.isRequired
  })).isRequired
};

const mapStateToProps = state => ({
  netWorth: getNetWorth(state),
  investedCoins: getInvestedCoins(state),
  watchList: getWatchList(state),
});

export default connect(
  mapStateToProps
)(AllCoins);
