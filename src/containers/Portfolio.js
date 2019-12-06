import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NetWorth from '../components/net-worth/NetWorth';
import AssetList from '../components/assets/AssetList';

const Portfolio = ({ netWorth, activeCoins }) => {
  return (
    <div>
      <NetWorth netWorth={netWorth} />
      {//net worth chart
      //diversification chart
      }
      <AssetList items={activeCoins} />
      {//hamburger menu
      }
    </div>
  );
};

Portfolio.propTypes = {
  netWorth: PropTypes.string.isRequired,
  activeCoins: PropTypes.arrayOf(PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired
};

const mapStateToProps = state => ({
  //to do: make selectors
  netWorth: getNetWorth(state),
  activeCoins: getActiveCoins(state)
});

export default connect(
  mapStateToProps
)(Portfolio);
