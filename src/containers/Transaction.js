import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TransactionForm from '../components/transaction-form/TransactionForm';
import AssetList from '../components/assets/AssetList';
import HamburgerMenu from '../components/hamburger-menu/HamburgerMenu';
import NetWorth from '../components/net-worth/NetWorth';

const Transaction = () => {
  return (
    <div>
      <NetWorth netWorth={netWorth} />
      <TransactionForm currencies={currencies} investedCoins={investedCoins} />
      <AssetList items={investedCoins} />
      <HamburgerMenu />
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
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired
};

const mapStateToProps = state => ({
  //todo make selectors
  netWorth: getNetWorth(state),
  currencies: getCurrencies(state),
  investedCoins: getInvestedCoins(state)
});

export default connect(
  mapStateToProps
)(Transaction);
