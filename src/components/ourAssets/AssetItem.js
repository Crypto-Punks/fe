import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AssetItem = ({ activeCoin }) => {
  const { id, logo, name, amount, price } = activeCoin;
  
  return (
    <Link to={`detail/${id}`}>
      <li>
        <img src={logo} alt={name} />
        <p>{amount} {name}</p>
        <p>${amount * price}</p>
      </li>
    </Link>
  );
};

AssetItem.propTypes = {
  activeCoin: PropTypes.shape({
    id: PropTypes.string.isRequired,
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  })
};

export default AssetItem;
