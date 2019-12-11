import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AboutCoin from '../components/about-coin/AboutCoin';
import HamburgerMenu from '../components/hamburger-menu/NavMenu';
import { getPortfolioInvestedCoins, getWatchList } from '../selectors/portfolioSelectors';
import { getCoinById } from '../services/currencies';
import { toggleWatchList, getPortfolio } from '../actions/portfolioActions';
import styles from './CoinDetail.css';
import PriceHistory from '../components/charts/PriceHistory';
import Derivative from '../components/charts/Derivative';



//todo make action for adding/removing from favorites, selectors, add charts

const CoinDetail = ({ match, investedCoins, watchList, handleClick, loadPortfolio }) => {
  const coin = investedCoins.find(element => element.name === match.params.id);
  const [coinInfo, setCoinInfo] = useState({});

  useEffect(() => {
    loadPortfolio();
    getCoinById(match.params.id)
      .then(info => {
        setCoinInfo(info[0]);
      });
  }, []);

  return (

    <div className={styles.CoinDetail}>
      <h1>You have {coin ? coin.amount : 0} {coinInfo.name}</h1>
      <button onClick={() => handleClick(watchList, match.params.id)}>{watchList.find(element => element.name === match.params.id) ? 'Remove from' : 'Add to'} watchList</button>
      <PriceHistory id={match.params.id} />
      <Derivative id={match.params.id} />
      <AboutCoin {...coinInfo} />
      <HamburgerMenu />
    </div>
  );
};

CoinDetail.propTypes = {
  investedCoins: PropTypes.arrayOf(PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string,
    amount: PropTypes.number,
    value: PropTypes.string
  })).isRequired,
  watchList: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  loadPortfolio: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  investedCoins: getPortfolioInvestedCoins(state),
  watchList: getWatchList(state)
});

const mapDispatchToProps = dispatch => ({
  handleClick(watchList, newCoin) {
    dispatch(toggleWatchList(watchList, newCoin));
  },
  loadPortfolio() {
    dispatch(getPortfolio());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinDetail);
