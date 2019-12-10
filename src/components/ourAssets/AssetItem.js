import React from 'react';
import PropTypes from 'prop-types';

const AssetItem = ({ activeCoin }) => {
  const name = activeCoin.name;
  const amount = activeCoin.amount;
  const logo = activeCoin.logo;
  
  return (
    <li>
      {logo && <img src={logo} alt={name} />}
      <p>{amount} {name}</p>
    </li>
  );
};

AssetItem.propTypes = {
  activeCoin: PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
  })
};

export default AssetItem;
