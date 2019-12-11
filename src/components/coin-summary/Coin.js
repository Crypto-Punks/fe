import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../coin-summary/CoinList.css';


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

  const styleClass = parseFloat(changePercent24Hr) < 0 ? 'negative' : 'positive';
  return (
    <li>
      <img src={logo} alt={name} />
      <p className={styles.Name} >{name}</p>
      <section>
        <p>Market Price: ${price}</p>
        <p className={`${styles.Change} ${styles[styleClass]}`}
        >{changePercent24Hr}%</p>
      </section>
    </li>
  );
}
