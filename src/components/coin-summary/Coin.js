import React from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Coin.css';
// import { getWatchList } from '../../selectors/portfolioSelectors';
// import { toggleWatchList } from '../../actions/portfolioActions';


const Coin = ({ item, watchList, handleClick }) => {
  const { id, logo, name, price, changePercent24Hr } = item;
  
  if(id === 'USD') return renderCoinHtml(logo, name, price, changePercent24Hr);
  
  return (
    <div className={styles.Coin}>
      {handleClick && <button className={watchList.find(element => element.name === id) ? styles.watched : styles.unwatched} onClick={() => handleClick(watchList, id)}>🟊</button>}
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
    changePercent24Hr: PropTypes.string.isRequired
  }),
  watchList: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  handleClick: PropTypes.func
};

// const mapStateToProps = state => ({
//   watchList: getWatchList(state)
// });

// const mapDispatchToProps = dispatch => ({
//   handleClick(watchList, coin) {
//     dispatch(toggleWatchList(watchList, coin))
//   }
// })

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
