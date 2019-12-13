import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import NetWorth from '../components/net-worth/NetWorth';
import AssetList from '../components/ourAssets/AssetList';
import NavMenu from '../components/hamburger-menu/NavMenu';

import { getPortfolio } from '../actions/portfolioActions';
import { SET_OPEN_MENU_FALSE } from '../actions/menuActions';
import { getPortfolioInvestedCoins } from '../selectors/portfolioSelectors';
import { getInvestedList } from '../services/currencies';

import PortfolioHistory from '../components/charts/PortfolioHistory';
import Diversification from '../components/charts/Diversification';
import styles from './HomeContainer.css';


const Portfolio = ({ loadPortfolio, portfolioInvestedCoins }) => {
  const [investedCoins, setInvestedCoins] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: SET_OPEN_MENU_FALSE });
    loadPortfolio();
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
      <div className={styles.Chart}>
        <PortfolioHistory />
        <Diversification investedCoins={investedCoins} />
      </div>
      <AssetList investedCoins={investedCoins} />
      <NavMenu />
    </div>
  );
};

Portfolio.propTypes = {
  portfolioInvestedCoins: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  })).isRequired,
  loadPortfolio: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  portfolioInvestedCoins: getPortfolioInvestedCoins(state)
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


