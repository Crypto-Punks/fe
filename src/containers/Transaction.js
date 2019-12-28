import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import TransactionForm from '../components/transaction-form/TransactionForm';
import AssetList from '../components/ourAssets/AssetList';
import NavMenu from '../components/hamburger-menu/NavMenu';
import NetWorth from '../components/net-worth/NetWorth';
import CoinList from '../components/coin-summary/CoinList';


import { getPortfolio } from '../actions/portfolioActions';
import { getPortfolioInvestedCoins, getPortfolioWatchList } from '../selectors/portfolioSelectors';
import { getAllCurrencyIds } from '../services/currencies';
import { coinTransaction } from '../actions/portfolioActions';
import { SET_OPEN_MENU_FALSE } from '../actions/menuActions';
import { getPortfolioLists } from '../services/currencies';
import styles from './HomeContainer.css';

const Transaction = ({ handleSubmit, loadPortfolio, portfolioInvestedCoins, portfolioWatchList }) => {
  const [investedCoins, setInvestedCoins] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [watchList, setWatchList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: SET_OPEN_MENU_FALSE });
    loadPortfolio();
  }, []);

  useEffect(()=> {
    getAllCurrencyIds()
      .then(res => {
        setCurrencies(res);
      });
  }, []);

  useEffect(() => {
    getPortfolioLists()
      .then(([investedCoins, watchList]) => {
        setInvestedCoins(investedCoins.map(coin => {
          const portCoin = portfolioInvestedCoins.find(element => element.name === coin.id);
          return portCoin ? { ...coin, amount: portCoin.amount } : coin;
        }));
        setWatchList(watchList);
      });
  }, [portfolioInvestedCoins, portfolioWatchList]);

  return (
    <div className={styles.HomeContainer}>
      <NetWorth />
      <TransactionForm currencies={currencies} investedCoins={portfolioInvestedCoins} handleSubmit={handleSubmit} />
      <AssetList investedCoins={investedCoins} />
      {
        watchList.length > 0 &&
      <>
        <h1>Your Watch List</h1>
        <CoinList items={watchList} />
      </>
      }
      <NavMenu />
    </div>
  );
};

Transaction.propTypes = {
  loadPortfolio: PropTypes.func.isRequired,
  portfolioInvestedCoins: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  })).isRequired,
  portfolioWatchList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.isRequired,
  })).isRequired,
  handleSubmit: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  portfolioInvestedCoins: getPortfolioInvestedCoins(state),
  portfolioWatchList: getPortfolioWatchList(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(event, exchangeRate, toCurrency, toCurrencyAmount, fromCurrency, fromCurrencyAmount, investedCoins) {
    event.preventDefault();
    dispatch(coinTransaction(exchangeRate, toCurrency, toCurrencyAmount, fromCurrency, fromCurrencyAmount, investedCoins));
  },
  loadPortfolio() {
    dispatch(getPortfolio());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transaction);
