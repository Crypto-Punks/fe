import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Coin = ({ item }) => {
  const { id, logo, name, price, changePercent24Hr } = item;
  
  if(id === 'USD') return renderCoinHtml(logo, name, price, changePercent24Hr);
  
  return (
    <Link to={`/detail/${id}`}>
      {renderCoinHtml(logo, name, price, changePercent24Hr)}
    </Link>
  );
};

Coin.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    changePercent24Hr: PropTypes.string.isRequired
  })
};

export default Coin;

function renderCoinHtml(logo, name, price, changePercent24Hr) {
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
}
