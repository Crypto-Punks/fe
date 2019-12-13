import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Coin.css';

const Coin = ({ item, watchList, handleClick, portfolioInvestedCoins }) => {
  const { id, logo, name, price, changePercent24Hr } = item;

  if(id === 'USD') return (
    <div className={styles.Coin}>
      {renderCoinHtml(logo, name, price, changePercent24Hr)}
    </div>
  );

  return (
    <div className={styles.Coin}>
      {
        handleClick && (portfolioInvestedCoins ? !portfolioInvestedCoins.find(element => element.name === id) : true) &&
        <button
          className={watchList.find(element => element.name === id) ? styles.watched : styles.unwatched}
          onClick={() => handleClick(watchList, id)}>
          🟊</button>
      }
      <Link to={`/detail/${id}`}>
        {renderCoinHtml(logo, name, price, changePercent24Hr)}
      </Link>
    </div>
  );
};

Coin.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    changePercent24Hr: PropTypes.string.isRequired,
    special: PropTypes.string.isRequired
  }),
  watchList: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  handleClick: PropTypes.func,
  portfolioInvestedCoins: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }))
};

export default Coin;


function renderCoinHtml(logo, name, price, changePercent24Hr) {
  const styleClass = parseFloat(changePercent24Hr) < 0 ? 'negative' : 'positive';
  return (
    <li>
      <img src={logo} alt={name} />
      <p className={styles.Name} >{name}</p>
      <section>
        <p className={styles.Change}> Market Price ${price}</p>
        <p className={`${styles.Change} ${styles[styleClass]}`}
        >{changePercent24Hr}%</p>
      </section>
    </li>
  );
}
