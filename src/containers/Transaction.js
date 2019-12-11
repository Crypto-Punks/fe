import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TransactionForm from '../components/transaction-form/TransactionForm';
import AssetList from '../components/ourAssets/AssetList';
import NavMenu from '../components/hamburger-menu/NavMenu';
import NetWorth from '../components/net-worth/NetWorth';
import { getNetWorth, getInvestedCoins } from '../selectors/portfolioSelectors';
import { getCurrencies } from '../services/currencies';
import { coinTransaction } from '../actions/portfolioActions';

const Transaction = ({ handleSubmit, netWorth, investedCoins }) => {
  let currencies = [];

  useEffect(()=> {
    getCurrencies()
      .then(res => {
        currencies = res;
      });
  }, []);

  return (
    <div>
      <NetWorth netWorth={netWorth} />
      <TransactionForm currencies={currencies} investedCoins={investedCoins} handleSubmit={handleSubmit} />
      <AssetList items={investedCoins} />
      <NavMenu />
    </div>
  );
};

Transaction.propTypes = {
  netWorth: PropTypes.number.isRequired,
  investedCoins: PropTypes.arrayOf(PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired,
  handleSubmit: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  netWorth: getNetWorth(state),
  investedCoins: getInvestedCoins(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(toCurrency, toCurrencyAmount, fromCurrency, fromCurrencyAmount, investedCoins) {
    dispatch(coinTransaction(toCurrency, toCurrencyAmount, fromCurrency, fromCurrencyAmount, investedCoins));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transaction);
