import React from 'react';
import Coin from './Coin';
import PropTypes from 'prop-types';
import styles from './CoinList.css';

const CoinList = ({ items, watchList, handleClick, portfolioInvestedCoins }) => {
  const elements = items.map(item => {
    return <Coin 
      key={item.name} 
      item={item} 
      watchList={watchList} 
      handleClick={handleClick} 
      portfolioInvestedCoins={portfolioInvestedCoins} />;
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
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    changePercent24Hr: PropTypes.string.isRequired,

  })).isRequired,
  watchList: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  handleClick: PropTypes.func,
  portfolioInvestedCoins: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }))
};

export default CoinList;
