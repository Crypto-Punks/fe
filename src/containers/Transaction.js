import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TransactionForm from '../components/transaction-form/TransactionForm';
import AssetList from '../components/ourAssets/AssetList';
import NavMenu from '../components/hamburger-menu/NavMenu';
import NetWorth from '../components/net-worth/NetWorth';

import { getPortfolio } from '../actions/portfolioActions';
import { getNetWorth, getPortfolioInvestedCoins } from '../selectors/portfolioSelectors';
import { getAllCurrencies } from '../services/currencies';
import { coinTransaction } from '../actions/portfolioActions';
import { getInvestedList } from '../services/currencies';

const Transaction = ({ handleSubmit, netWorth, loadPortfolio, portfolioInvestedCoins }) => {
  const [investedCoins, setInvestedCoins] = useState([]);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    loadPortfolio();
  }, []);

  useEffect(()=> {
    getAllCurrencies()
      .then(res => {
        setCurrencies(res.map(coin => coin.id));
      });
  }, []);

  useEffect(() => {
    getInvestedList()
      .then(coins => {
        setInvestedCoins(coins.map(coin => {
          const portCoin = portfolioInvestedCoins.find(element => element.name === coin.id);
          return {
            id: coin.id,
            logo: coin.currencySymbol,
            name: coin.name,
            amount: portCoin ? portCoin.amount : null,
            price: coin.priceUsd
          };
        }));
      });
  }, [portfolioInvestedCoins]);

  return (
    <div>
      <NetWorth netWorth={netWorth} />
      <TransactionForm currencies={currencies} investedCoins={investedCoins} handleSubmit={handleSubmit} />
      <AssetList investedCoins={investedCoins} />
      <NavMenu />
    </div>
  );
};

Transaction.propTypes = {
  loadPortfolio: PropTypes.func.isRequired,
  netWorth: PropTypes.number.isRequired,
  portfolioInvestedCoins: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  })).isRequired,
  handleSubmit: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  netWorth: getNetWorth(state),
  portfolioInvestedCoins: getPortfolioInvestedCoins(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(event, toCurrency, toCurrencyAmount, fromCurrency, fromCurrencyAmount, investedCoins) {
    event.preventDefault();
    dispatch(coinTransaction(toCurrency, toCurrencyAmount, fromCurrency, fromCurrencyAmount, investedCoins));
  },
  loadPortfolio() {
    dispatch(getPortfolio());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transaction);
