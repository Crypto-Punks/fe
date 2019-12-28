import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import NetWorth from '../components/net-worth/NetWorth';
import AssetList from '../components/ourAssets/AssetList';
import NavMenu from '../components/hamburger-menu/NavMenu';
import CoinList from '../components/coin-summary/CoinList';

import { getPortfolio } from '../actions/portfolioActions';
import { SET_OPEN_MENU_FALSE } from '../actions/menuActions';
import { getPortfolioInvestedCoins, getWatchList } from '../selectors/portfolioSelectors';
import { getPortfolioLists } from '../services/currencies';

import PortfolioHistory from '../components/charts/PortfolioHistory';
import Diversification from '../components/charts/Diversification';
import styles from './HomeContainer.css';


const Portfolio = ({ loadPortfolio, portfolioInvestedCoins, portfolioWatchList }) => {
  const [investedCoins, setInvestedCoins] = useState([]);
  const [watchList, setWatchList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: SET_OPEN_MENU_FALSE });
    loadPortfolio();
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
      <div className={styles.Chart}>
        <PortfolioHistory />
        <Diversification investedCoins={investedCoins} />
      </div>
      <h1>Your Assets</h1>
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

Portfolio.propTypes = {
  portfolioInvestedCoins: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  })).isRequired,
  portfolioWatchList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.isRequired,
  })),
  loadPortfolio: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  portfolioInvestedCoins: getPortfolioInvestedCoins(state),
  portfolioWatchList: getWatchList(state)
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


