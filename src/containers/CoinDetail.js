import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AboutCoin from '../components/about-coin/AboutCoin';
import NavMenu from '../components/hamburger-menu/NavMenu';
import Derivative from '../components/charts/Derivative';
import PriceHistory from '../components/charts/PriceHistory';

import { toggleWatchList, getPortfolio } from '../actions/portfolioActions';
import { getPortfolioInvestedCoins, getPortfolioWatchList } from '../selectors/portfolioSelectors';
import { getCoinInfoById } from '../services/currencies';

import styles from './CoinDetail.css';
import close from '../images/xmarksthespot.png';
import add from '../images/checkIt.png';


const CoinDetail = ({ match, investedCoins, watchList, handleClick, loadPortfolio }) => {
  const coin = investedCoins.find(element => element.name === match.params.id);
  const [coinInfo, setCoinInfo] = useState({});
  const [stateDuration, setStateDuration] = useState('1day');


  useEffect(() => {
    loadPortfolio();
    getCoinInfoById(match.params.id)
      .then(info => {
        setCoinInfo(info);
      });
  }, []);

  return (

    <>
      <div className={styles.CoinDetail}>
        <div className={styles.Header}>
          <img src={coinInfo.logo} />
          <h1>You have {coin ? coin.amount : 0} {coinInfo.name}</h1>
          <button onClick={() => handleClick(watchList, match.params.id)}>{watchList.find(element => element.name === match.params.id) ? <img src={close} /> : <img src={add}/>} </button>
        </div>
        <form>
          {radioButton('1hour', 'Hour', stateDuration, setStateDuration)}
          {radioButton('1day', 'Day', stateDuration, setStateDuration)}
          {radioButton('3days', '3 Days', stateDuration, setStateDuration)}
          {radioButton('1week', 'Week', stateDuration, setStateDuration)}
          {radioButton('1month', 'Month', stateDuration, setStateDuration)}
          {radioButton('6months', '6 Months', stateDuration, setStateDuration)}
          {radioButton('1year', 'Year', stateDuration, setStateDuration)}
        </form>
      </div>
      <div className={styles.Charts}>
        <PriceHistory id={match.params.id} historyDuration={stateDuration} />
        <Derivative id={match.params.id} derivativeDuration={stateDuration} />
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
  watchList: getPortfolioWatchList(state)
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

function radioButton(duration, label, stateDuration, setStateDuration) {
  return (
    <div>
      <label>
        <input type='radio' value={duration}
          checked={stateDuration === duration}
          onChange={() => setStateDuration(duration)} />
        {label}
      </label>
    </div>
  );
}
