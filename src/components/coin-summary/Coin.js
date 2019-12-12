import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Coin.css';
import Star from '../../images/starIcon.png';

const Coin = ({ item, watchList, handleClick }) => {
  const { id, logo, name, price, changePercent24Hr } = item;

  if(id === 'USD') return (
    <div className={styles.Coin}>
      {renderCoinHtml(logo, name, price, changePercent24Hr)}
    </div>
  );

  return (
    <div className={styles.Coin}>
      {
        handleClick &&
        <button
          className={watchList.find(element => element.name === id) ? styles.watched : styles.unwatched}
          onClick={() => handleClick(watchList, id)}>
          <img src={Star}/></button>
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
  handleClick: PropTypes.func
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
