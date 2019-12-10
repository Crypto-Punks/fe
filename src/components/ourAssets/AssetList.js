import React from 'react';
import PropTypes from 'prop-types';
import AssetItem from './AssetItem';
import styles from './AssetList.css';

const AssetList = ({ investedCoins }) => {
  const coins = investedCoins.map(coin => {
    return <AssetItem key={coin.name} coin={coin} />; 
  });
  return (
    <ul className={styles.AssetList}>
      {coins}
      <li></li>
      <li></li>
      <li></li>
      <li></li>
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
