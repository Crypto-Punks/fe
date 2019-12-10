import React from 'react';
import PropTypes from 'prop-types';
import styles from './NetWorth.css';
import Logo from '../../images/cryptoLogoPlain.png';


const NetWorth = ({ netWorth }) => {
  return (
    <div className={styles.NetWorth}>
      <img src={Logo} />
      <p>Net worth: ${netWorth}</p>
    </div>
  );
};

NetWorth.propTypes = {
  netWorth: PropTypes.number.isRequired
};

export default NetWorth;
