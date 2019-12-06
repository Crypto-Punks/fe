import React from 'react';
import PropTypes from 'prop-types';

const Coin = ({ item }) => {
  const { logo, name, price, changePercent24Hr } = item;
  return (
    <li>
      <img src={logo} alt={name} />
      <p>{name}</p>
      <section>
        <p>${price}</p>
        <p>{changePercent24Hr}%</p>
      </section>
    </li>
  );
};

Coin.propTypes = {
  item: PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    changePercent24Hr: PropTypes.number.isRequired
  })
};

export default Coin;
