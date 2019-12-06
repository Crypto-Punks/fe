import React from 'react';
import PropTypes from 'prop-types';

const AssetItem = ({ logo, name, amount, value }) => {
  return (
    <li>
      <img src={logo} alt={name} />
      <p>{amount} {name}</p>
      <p>{value}</p>
    </li>
  );
};

AssetItem.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired
};

export default AssetItem;
