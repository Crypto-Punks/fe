import React from 'react';
import PropTypes from 'prop-types';
import styles from './NetWorth.css';

const NetWorth = ({ netWorth }) => {
  return (
    <div className={styles.NetWorth}>
      <img src="src/images/cryptoLogo.png" />
      <p>Net worth: ${netWorth}</p>
    </div>
  );
};

NetWorth.propTypes = {
  netWorth: PropTypes.number.isRequired
};

export default NetWorth;
