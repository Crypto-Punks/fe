import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TransactionForm from '../components/transaction-form/TransactionForm';
import AssetList from '../components/ourAssets/AssetList';
import NavMenu from '../components/hamburger-menu/NavMenu';
import NetWorth from '../components/net-worth/NetWorth';
import styles from './HomeContainer.css';

import { getPortfolio } from '../actions/portfolioActions';
import { getPortfolioInvestedCoins } from '../selectors/portfolioSelectors';
import { getAllCurrencyIds } from '../services/currencies';
import { coinTransaction } from '../actions/portfolioActions';
import { getInvestedList } from '../services/currencies';

const Transaction = ({ handleSubmit, loadPortfolio, portfolioInvestedCoins }) => {
  const [investedCoins, setInvestedCoins] = useState([]);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    loadPortfolio();
  }, []);

  useEffect(()=> {
    getAllCurrencyIds()
      .then(res => {
        setCurrencies(res);
      });
  }, []);

  useEffect(() => {
    getInvestedList()
      .then(coins => {
        setInvestedCoins(coins.map(coin => {
          const portCoin = portfolioInvestedCoins.find(element => element.name === coin.id);
          return portCoin ? { ...coin, amount: portCoin.amount } : coin;
        }));
      });
  }, [portfolioInvestedCoins]);

  return (
    <div className={styles.HomeContainer}>
      <NetWorth />
      <TransactionForm currencies={currencies} investedCoins={portfolioInvestedCoins} handleSubmit={handleSubmit} />
      <AssetList investedCoins={investedCoins} />
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
  handleSubmit: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  portfolioInvestedCoins: getPortfolioInvestedCoins(state)
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
