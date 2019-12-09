import React from 'react';
import PropTypes from 'prop-types';
import AssetItem from './AssetItem';

const AssetList = ({ activeCoins }) => {
  const coins = activeCoins.map(coin => {
    return <AssetItem key={coin.name} coin={coin} />; 
  });
  return (
    <ul>
      {coins}
    </ul>
  );
};

AssetList.propTypes = {
  activeCoins: PropTypes.arrayOf(PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired
};

export default AssetList;
