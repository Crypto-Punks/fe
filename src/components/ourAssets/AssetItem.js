import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const AssetItem = ({ activeCoin }) => {
  const { id, logo, name, amount, price } = activeCoin;

  if(id === 'USD') return renderAssetHtml(logo, name, amount, price);

  return (
    <Link to={`detail/${id}`}>
      {renderAssetHtml(logo, name, amount, price)}
    </Link>
  );
};

AssetItem.propTypes = {
  activeCoin: PropTypes.shape({
    id: PropTypes.string.isRequired,
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired
  })
};

export default AssetItem;


function renderAssetHtml(logo, name, amount, price) {
  return (
    <li>
      <img src={logo} alt={name} />
      <p>{amount} {name}</p>
      <p>${amount * price}</p>
    </li>
  );
}
