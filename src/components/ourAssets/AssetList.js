import React from 'react';
import PropTypes from 'prop-types';
import AssetItem from './AssetItem';

const AssetList = ({ investedCoins }) => {
  const coins = investedCoins.map(coin => {
    return <AssetItem key={coin.name} coin={coin} />; 
  });
  return (
    <ul>
      {coins}
    </ul>
  );
};

AssetList.propTypes = {
  investedCoins: PropTypes.arrayOf(PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired
};

export default AssetList;
