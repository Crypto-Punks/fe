import React from 'react';
import PropTypes from 'prop-types';

const AssetItem = ({ activeCoin }) => {
  const { logo, name, amount, price } = activeCoin;
  
  return (
    <li>
      <img src={logo} alt={name} />
      <p>{amount} {name}</p>
      <p>${amount * price}</p>
    </li>
  );
};

AssetItem.propTypes = {
  activeCoin: PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  })
};

export default AssetItem;
