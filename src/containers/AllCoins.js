import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NetWorth from '../components/net-worth/NetWorth';
import HamburgerMenu from '../components/hamburger-menu/NavMenu';
import CoinList from '../components/coin-summary/CoinList';
import CoinSearchForm from '../components/coin-search/CoinSearchForm';
import { getNetWorth, getWatchList } from '../selectors/portfolioSelectors';
import { getStateSearchedList } from '../selectors/coinsSelectors';
import { getTop100Currencies } from '../services/currencies';
import { getSearchedList } from '../actions/coinsActions';

const AllCoins = ({ netWorth, portfolioWatchList, searchedList, handleSubmit }) => {
  const [watchList, setWatchList] = useState([]);
  const [investedCoins, setInvestedCoins] = useState([]);
  const [top100Coins, setTop100Coins] = useState([]);

  useEffect(()=> {
    getTop100Currencies()
      .then(({ watchList, investedCoins, top100Coins }) => {
        setWatchList(watchList);
        setInvestedCoins(investedCoins);
        setTop100Coins(modifiedTop100(top100Coins, watchList, investedCoins));
      });
  }, [portfolioWatchList]);

  return (
    <div>
      <NetWorth netWorth={netWorth} />
      <h2>Invested Coins</h2>
      <CoinList items={coinListNeeds(investedCoins)} />
      <h2>Watched Coins</h2>
      {watchList.length !== 0 && <CoinList items={coinListNeeds(watchList)} />}
      <h2>Search For A Coin</h2>
      <CoinSearchForm handleSubmit={handleSubmit}/>
      {searchedList.length !== 0 && <CoinList items={searchedList} />}
      <h2>All Coins</h2>
      <CoinList items={coinListNeeds(top100Coins)} />
      <HamburgerMenu />
    </div>
  );
};

AllCoins.propTypes = {
  netWorth: PropTypes.number.isRequired,
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
  handleSubmit: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  netWorth: getNetWorth(state),
  portfolioWatchList: getWatchList(state),
  searchedList: getStateSearchedList(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(event, query) {
    event.preventDefault();
    dispatch(getSearchedList(query));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCoins);



function coinListNeeds(array) {
  return array.map(coin => ({
    id: coin.id,
    logo: coin.currencySymbol,
    name: coin.name,
    price: coin.priceUsd,
    changePercent24Hr: coin.changePercent24Hr
  }));
}


function modifiedTop100(top100Coins, watchList, investedCoins) {
  const lookup = top100Coins.reduce((acc, coin) => {
    acc = {
      ...acc,
      [coin.id]: { ...coin, special: null }
    };
    return acc;
  }, {});

  watchList.forEach(watchCoin => {
    if(lookup[watchCoin.id]) lookup[watchCoin.id].special = 'watched';
  });
  investedCoins.forEach(investedCoin => {
    if(lookup[investedCoin.id]) lookup[investedCoin.id].special = 'invested';
  });

  return Object.values(lookup);
}
