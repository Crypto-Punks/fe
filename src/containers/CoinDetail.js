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

    <div className={styles.CoinDetail}>
      <h1>You have {coin ? coin.amount : 0} {coinInfo.name}</h1>
      <button onClick={() => handleClick(watchList, match.params.id)}>{watchList.find(element => element.name === match.params.id) ? 'Remove from' : 'Add to'} watchList</button>
      <PriceHistory id={match.params.id} historyInterval={historyInterval}/>
      <Derivative id={match.params.id} derivativeInterval={derivativeInterval} />
      <form>
        <div>
          <label>
            <input type='radio' value='m1' 
              checked={derivativeInterval === 'm1'}
              onChange={() => {
                setHistoryInterval('m1');
                setDerivativeInterval('m1');
              }} />
              Previous Hour
          </label>
        </div>
        <div>
          <label>
            <input type='radio' value='m30' 
              checked={derivativeInterval === 'm30'}
              onChange={() => {
                setHistoryInterval('m30');
                setDerivativeInterval('m30');
              }} />
              Previous Day
          </label>
        </div>
        <div>
          <label>
            <input type='radio' value='h1' 
              checked={derivativeInterval === 'h1'}
              onChange={() => {
                setHistoryInterval('h1');
                setDerivativeInterval('h1');
              }} />
              Previous 3 Days
          </label>
        </div>
        <div>
          <label>
            <input type='radio' value='h12' 
              checked={derivativeInterval === 'h12'}
              onChange={() => {
                setHistoryInterval('h12');
                setDerivativeInterval('h12');
              }} />
              Previous Week
          </label>
        </div>
        <div>
          <label>
            <input type='radio' value='d1' 
              checked={derivativeInterval === 'd1'}
              onChange={() => {
                setHistoryInterval('d1');
                setDerivativeInterval('d1');
              }} />
              Previous Month
          </label>
        </div>
        <div>
          <label>
            <input type='radio' value='d1m6' 
              checked={derivativeInterval === 'd1m6'}
              onChange={() => {
                setHistoryInterval('d1m6');
                setDerivativeInterval('d1m6');
              }} />
              Previous 6 Months
          </label>
        </div>
        <div>
          <label>
            <input type='radio' value='d1y1' 
              checked={derivativeInterval === 'd1y1'}
              onChange={() => {
                setHistoryInterval('d1y1');
                setDerivativeInterval('d1y1');
              }} />
              Previous Year
          </label>
        </div>
      </form>
      <AboutCoin {...coinInfo} />
      <NavMenu />
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
