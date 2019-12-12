import React from 'react';
import PropTypes from 'prop-types';
import styles from './AboutCoin.css';

//todo - maybe add info about volume, market cap, etc.

const AboutCoin = ({ website, description }) => {
  return (
    <div className={styles.AboutCoin}>
      <a target='_blank' rel="noopener noreferrer" href={website}>Coins website</a>
      <p>{description}</p>
    </div>
  );
};

AboutCoin.propTypes = {
  website: PropTypes.string,
  description: PropTypes.string
};

export default AboutCoin;
