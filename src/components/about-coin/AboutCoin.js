import React from 'react';
import PropTypes from 'prop-types';
import styles from './AboutCoin.css';

const AboutCoin = ({ website, description, maxSupply, supply, marketCapUsd, volumeUsd24Hr, changePercent24Hr }) => {
  return (
    <div className={styles.AboutCoin}>
      <a target='_blank' rel="noopener noreferrer" href={website}>Coins website</a>
      <div className={styles.Stats}>
        <p>Supply: {supply}</p>
        <p>Max Supply: {maxSupply}</p>
        <p>Market Cap in USD: {marketCapUsd}</p>
        <p>Volume Traded in last 24 Hours in USD: {volumeUsd24Hr}</p>
        <p>Change Percent in last 24 Hours in USD: {changePercent24Hr}</p>
      </div>
      <p>Description: {description}</p>
    </div>
  );
};

AboutCoin.propTypes = {
  website: PropTypes.string,
  description: PropTypes.string,
  maxSupply: PropTypes.string,
  supply: PropTypes.string,
  marketCapUsd: PropTypes.string,
  volumeUsd24Hr: PropTypes.string,
  changePercent24Hr: PropTypes.string
};

export default AboutCoin;
