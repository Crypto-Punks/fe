import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NetWorth from '../components/net-worth/NetWorth';
import HamburgerMenu from '../components/hamburger-menu/NavMenu';
import CoinList from '../components/coin-summary/CoinList';
import CoinSearchForm from '../components/coin-search/CoinSearchForm';
import { getNetWorth, getWatchList } from '../selectors/portfolioSelectors';
import { getTop100Currencies } from '../services/currencies';

const AllCoins = ({ netWorth, portfolioWatchList }) => {
  const [watchList, setWatchList] = useState([]);
  const [investedCoins, setInvestedCoins] = useState([]);
  const [top100Coins, setTop100Coins] = useState([]);

  useEffect(()=> {
    getTop100Currencies()
      .then(({ watchList, investedCoins, top100Coins }) => {
        setWatchList(watchList);
        setInvestedCoins(investedCoins);
        setTop100Coins(top100Coins);
      });
  }, [portfolioWatchList]);

  return (
    <div>
      <NetWorth netWorth={netWorth} />
      <CoinList items={coinListNeeds(investedCoins)} />
      {watchList.length !== 0 && <CoinList items={coinListNeeds(watchList)} />}
      <CoinSearchForm />
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
};

const mapStateToProps = state => ({
  netWorth: getNetWorth(state),
  portfolioWatchList: getWatchList(state),
});

export default connect(
  mapStateToProps
)(AllCoins);

function coinListNeeds(array) {
  return array.map(coin => ({
    logo: coin.currencySymbol,
    name: coin.name,
    price: coin.priceUsd,
    changePercent24Hr: coin.changePercent24Hr
  }));
}
