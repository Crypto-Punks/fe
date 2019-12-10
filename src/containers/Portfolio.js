import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NetWorth from '../components/net-worth/NetWorth';
import AssetList from '../components/ourAssets/AssetList';
import NavMenu from '../components/hamburger-menu/NavMenu';
import styles from '../containers/Portfolio.css';
import { getNetWorth, getInvestedCoins } from '../selectors/portfolioSelectors';
import { getOpenMenu } from '../selectors/menuSelectors';
import { getPortfolio } from '../actions/portfolioActions';


const Portfolio = ({ netWorth, investedCoins, openMenu, loadPortfolio }) => {

  useEffect(() => {
    loadPortfolio();
  }, []);

  return (
    <div>
      <NetWorth netWorth={netWorth} />
      {//net worth chart
        //diversification chart
      }
      <AssetList investedCoins={investedCoins} />
      <NavMenu className={styles.NavMenu} openMenu={openMenu} />
    </div>
  );
};

Portfolio.propTypes = {
  netWorth: PropTypes.number.isRequired,
  investedCoins: PropTypes.arrayOf(PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  })).isRequired,
  openMenu: PropTypes.bool.isRequired,
  loadPortfolio: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  netWorth: getNetWorth(state),
  investedCoins: getInvestedCoins(state),
  openMenu: getOpenMenu(state)
});

const mapDispatchToProps = dispatch => ({
  loadPortfolio() {
    dispatch(getPortfolio());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portfolio);


