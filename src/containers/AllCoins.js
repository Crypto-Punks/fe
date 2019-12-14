import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import NetWorth from '../components/net-worth/NetWorth';
import NavMenu from '../components/hamburger-menu/NavMenu';
import CoinList from '../components/coin-summary/CoinList';

import CoinSearchForm from '../components/coin-search/CoinSearchForm';
import { getSearchedList, CLEAR_SEARCHED_LIST } from '../actions/coinsActions';
import { toggleWatchList, getPortfolio } from '../actions/portfolioActions';
import { SET_OPEN_MENU_FALSE } from '../actions/menuActions';
import { getStateSearchedList, getSearchedError } from '../selectors/coinsSelectors';
import { getWatchList, getPortfolioInvestedCoins } from '../selectors/portfolioSelectors';
import { getTop100Currencies } from '../services/currencies';

import styles from './AllCoins.css';

const AllCoins = ({ portfolioInvestedCoins, portfolioWatchList, searchedList, handleSearchSubmit, loadPortfolio, clearSearch, handleClick, searchedError }) => {

  const [watchList, setWatchList] = useState([]);
  const [investedCoins, setInvestedCoins] = useState([]);
  const [top100Coins, setTop100Coins] = useState([]);

  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch({ type: SET_OPEN_MENU_FALSE });
    loadPortfolio();
  }, []);

  useEffect(() => {
    getTop100Currencies()
      .then(({ watchList, investedCoins, top100Coins }) => {
        setWatchList(watchList);
        setInvestedCoins(investedCoins);
        setTop100Coins(top100Coins);
      });
  }, [portfolioWatchList]);

  return (
    <>
      <NetWorth />
      <div className={styles.AllCoins}>
        {
          searchedError &&
        <> 
          {renderClearSearchButton(clearSearch)}
          <h1>{searchedError}</h1>
        </>
        }
        {
          searchedList.length !== 0 && 
        <>
          <h1>Search Results</h1>
          {renderClearSearchButton(clearSearch)}
          {renderCoinList(searchedList, handleClick, portfolioWatchList)}
        </>
        }
        <h1>Invested Coins</h1>
        {renderCoinList(investedCoins)}
        {
          watchList.length !== 0 && 
          <>
            <h1>Watched Coins</h1>
            {renderCoinList(watchList, handleClick, portfolioWatchList)}
          </>
        }
        <CoinSearchForm handleSubmit={handleSearchSubmit}/>
        <h1>All Coins</h1>
        {renderCoinList(top100Coins, handleClick, portfolioWatchList, portfolioInvestedCoins)}
      </div>
      <NavMenu />
    </>
  );
};

AllCoins.propTypes = {
  portfolioWatchList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  searchedList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    changePercent24Hr: PropTypes.string.isRequired
  })).isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  loadPortfolio: PropTypes.func.isRequired,
  searchedError: PropTypes.string,
  portfolioInvestedCoins: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({
  portfolioInvestedCoins: getPortfolioInvestedCoins(state),
  portfolioWatchList: getWatchList(state),
  searchedList: getStateSearchedList(state),
  searchedError: getSearchedError(state)
});

const mapDispatchToProps = dispatch => ({
  handleSearchSubmit(event, query) {
    event.preventDefault();
    dispatch(getSearchedList(query));
  },
  clearSearch() {
    dispatch({ type: CLEAR_SEARCHED_LIST });
  },
  handleClick(watchList, coin) {
    dispatch(toggleWatchList(watchList, coin));
  },
  loadPortfolio() {
    dispatch(getPortfolio());
    dispatch({ type: CLEAR_SEARCHED_LIST });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCoins);

function renderCoinList(top100Coins, handleClick, portfolioWatchList, portfolioInvestedCoins) {
  return <CoinList items={top100Coins} handleClick={handleClick} watchList={portfolioWatchList} portfolioInvestedCoins={portfolioInvestedCoins} />;
}

function renderClearSearchButton(clearSearch) {
  return (
    <button 
      className={styles.ClearButton} 
      onClick={()=> clearSearch()}>
  X
    </button>
  );
}

