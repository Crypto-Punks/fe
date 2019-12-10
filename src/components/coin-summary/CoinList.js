import React from 'react';
import PropTypes from 'prop-types';
import Coin from './Coin';
import styles from './CoinList.css';

const CoinList = ({ items }) => {
  const elements = items.map(item => {
    return <Coin key={item.name} item={item} />;
  });
  return (
    <ul className={styles.CoinList}>
      {elements}
    </ul>
  );
};

CoinList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    changePercent24Hr: PropTypes.string.isRequired
  })).isRequired
};

export default CoinList;
