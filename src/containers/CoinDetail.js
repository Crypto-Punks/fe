import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AboutCoin from '../components/about-coin/AboutCoin';
import NavMenu from '../components/hamburger-menu/NavMenu';
import Derivative from '../components/charts/Derivative';
import PriceHistory from '../components/charts/PriceHistory';

import { toggleWatchList, getPortfolio } from '../actions/portfolioActions';
import { getPortfolioInvestedCoins, getWatchList } from '../selectors/portfolioSelectors';
import { getCoinById } from '../services/currencies';

import styles from './CoinDetail.css';



//todo make action for adding/removing from favorites, selectors, add charts

const CoinDetail = ({ match, investedCoins, watchList, handleClick, loadPortfolio }) => {
  const coin = investedCoins.find(element => element.name === match.params.id);
  const [coinInfo, setCoinInfo] = useState({});
  const [derivativeInterval, setDerivativeInterval] = useState('d1');
  const [historyInterval, setHistoryInterval] = useState('d1');

  useEffect(() => {
    loadPortfolio();
    getCoinById(match.params.id)
      .then(info => {
        setCoinInfo(info[0]);
      });
  }, []);

  return (
    <>
      <div className={styles.CoinDetail}>
        <h1>You have {coin ? coin.amount : 0} {coinInfo.name}</h1>
        <button onClick={() => handleClick(watchList, match.params.id)}>{watchList.find(element => element.name === match.params.id) ? 'Remove from' : 'Add to'} watchList</button>
        <form>
          {radioButton('m1', 'Hour', derivativeInterval, setHistoryInterval, setDerivativeInterval)}
          {radioButton('m30', 'Day', derivativeInterval, setHistoryInterval, setDerivativeInterval)}
          {radioButton('h1', '3 Days', derivativeInterval, setHistoryInterval, setDerivativeInterval)}
          {radioButton('h12', 'Week', derivativeInterval, setHistoryInterval, setDerivativeInterval)}
          {radioButton('d1', 'Month', derivativeInterval, setHistoryInterval, setDerivativeInterval)}
          {radioButton('d1m6', ' Months', derivativeInterval, setHistoryInterval, setDerivativeInterval)}
          {radioButton('d1y1', 'Year', derivativeInterval, setHistoryInterval, setDerivativeInterval)}
        </form>
      </div>
      <div className={styles.Charts}>
        <PriceHistory id={match.params.id} historyInterval={historyInterval} />
        <Derivative id={match.params.id} derivativeInterval={derivativeInterval} />
      </div>
      <AboutCoin {...coinInfo} />
      <NavMenu />
    </>
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

function radioButton(string, label, stateInterval, setHistoryInterval, setDerivativeInterval) {
  return (
    <div>
      <label>
        <input type='radio' value={string}
          checked={stateInterval === string}
          onChange={() => {
            setHistoryInterval(string);
            setDerivativeInterval(string);
          }} />
        {label}
      </label>
    </div>
  );
}
