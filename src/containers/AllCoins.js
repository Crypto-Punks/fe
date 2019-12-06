import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NetWorth from '../components/net-worth/NetWorth';
import HamburgerMenu from '../components/hamburger-menu/HamburgerMenu';
import CoinList from '../components/coin-summary/CoinList';
import CoinSearchForm from '../components/coin-search/CoinSearchForm';

const AllCoins = ({ netWorth, activeCoins, watchlist, allCoins }) => {
  return (
    <div>
      <NetWorth netWorth={netWorth} />
      <CoinList items={activeCoins} />
      {watchlist.length !== 0 && <CoinList items={watchlist} />}
      <CoinSearchForm />
      <CoinList items={allCoins} />
      <HamburgerMenu />
    </div>
  );
};

AllCoins.propTypes = {
  netWorth: PropTypes.string.isRequired,
  activeCoins: PropTypes.arrayOf(PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    changePercent24Hr: PropTypes.number.isRequired
  })).isRequired,
  watchlist: PropTypes.arrayOf(PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    changePercent24Hr: PropTypes.number.isRequired
  })),
  allCoins: PropTypes.arrayOf(PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    changePercent24Hr: PropTypes.number.isRequired
  })).isRequired
};

const mapStateToProps = state => ({
  //to do: make selectors
  netWorth: getNetWorth(state),
  activeCoins: getActiveCoins(state),
  watchlist: getWatchlist(state),
  allCoins: getAllCoins(state)
});

export default connect(
  mapStateToProps
)(AllCoins);
