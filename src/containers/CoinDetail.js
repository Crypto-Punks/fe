import React from 'react';
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';
import AboutCoin from '../components/about-coin/AboutCoin';
import HamburgerMenu from '../components/hamburger-menu/HamburgerMenu';

//todo make action for adding/removing from favorites, selectors, add charts

const CoinDetail = ({ match, investedCoins, watchlist }) => {
  const coin = investedCoins.find(element => element.name === match.params.id);
  const coinInfo = getCoinInfo(match.params.id);
  return (
    <div>
      <h1>You have {coin.amount} {coin.name}</h1>
      <button>{watchlist.find(element => element.name === match.params.id) ? 'Remove from' : 'Add to'} watchlist</button>
      {
        // performance chart
      }
      {
        // derivative chart
      }
      <AboutCoin {...coinInfo} />
      <HamburgerMenu />
    </div>
  );
};

CoinDetail.propTypes = {
  investedCoins: PropTypes.arrayOf(PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired,
  watchlist: PropTypes.arrayOf(PropTypes.string),
  match: PropTypes.shape({
    params: {
      id: PropTypes.string
    }
  }).isRequired
};

const mapStateToProps = state => ({
  investedCoins: getInvestedCoins(state),
  watchlist: getWatchlist(state)
});

const mapDispatchToProps = dispatch => ({
  handleClick() {
    dispatch(toggleWatchlist());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinDetail);
