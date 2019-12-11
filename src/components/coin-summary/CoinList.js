import React from 'react';
import PropTypes from 'prop-types';
import Coin from './Coin';
import styles from './CoinList.css';

const CoinList = ({ items, watchList, handleClick }) => {
  const elements = items.map(item => {
    return <Coin key={item.name} item={item} watchList={watchList} handleClick={handleClick} />;
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
    logo: PropTypes.string.isRequierd,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    changePercent24Hr: PropTypes.string.isRequired
  })).isRequired,
  watchList: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  handleClick: PropTypes.func
};

export default CoinList;
