import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NetWorth from '../components/net-worth/NetWorth';
import HamburgerMenu from '../components/hamburger-menu/NavMenu';
import CoinList from '../components/coin-summary/CoinList';
import CoinSearchForm from '../components/coin-search/CoinSearchForm';
import { getInvestedCoins, getNetWorth, getWatchList, getTop100Coins } from '../selectors/portfolioSelectors';

const AllCoins = ({ netWorth, investedCoins, watchList, top100Coins }) => {

  return (
    <div>
      <NetWorth netWorth={netWorth} />
      <CoinList items={investedCoins} />
      {watchList.length !== 0 && <CoinList items={watchList} />}
      <CoinSearchForm />
      <CoinList items={top100Coins} />
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
  top100Coins: PropTypes.arrayOf(PropTypes.shape({
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
  top100Coins: getTop100Coins(state),
});

export default connect(
  mapStateToProps
)(AllCoins);
