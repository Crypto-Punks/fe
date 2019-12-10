import React from 'react';
import PropTypes from 'prop-types';
import AssetItem from './AssetItem';

const AssetList = ({ investedCoins }) => {
  const coins = investedCoins.map(coin => {
    return <AssetItem key={coin.name} activeCoin={coin} />; 
  });
  return (
    <ul>
      {coins}
    </ul>
  );
};

AssetList.propTypes = {
  investedCoins: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  })).isRequired
};

export default AssetList;