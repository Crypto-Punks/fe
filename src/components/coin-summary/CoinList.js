import React from 'react';
import PropTypes from 'prop-types';
import Coin from './Coin';

const CoinList = ({ items }) => {
  const elements = items.map(item => {
    return <Coin key={item.name} item={item} />;
  });
  return (
    <ul>
      {elements}
    </ul>
  );
};

CoinList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    changePercent24Hr: PropTypes.number.isRequired
  })).isRequired
};

export default CoinList;
