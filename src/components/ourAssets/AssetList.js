import React from 'react';
import PropTypes from 'prop-types';
import AssetItem from './AssetItem';
import styles from './AssetList.css';

const AssetList = ({ investedCoins }) => {
  const coins = investedCoins.map(coin => {
    return <AssetItem key={coin.name} activeCoin={coin} />; 
  });
  return (
    <ul className={styles.AssetList}>
      {coins}
    </ul>
  );
};

AssetList.propTypes = {
  investedCoins: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number,
    price: PropTypes.string.isRequired
  })).isRequired
};

export default AssetList;
