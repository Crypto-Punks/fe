import React from 'react';
import PropTypes from 'prop-types';
import styles from './Opener.css';

const Opener = ({ openMenu, setOpenMenu }) => {

  return (
    <div className={styles.ButtonContainer}>
      <button className={`${styles.Button} ${openMenu ? styles.up : styles.down} `}
        onClick={() => {
          openMenu ? setOpenMenu(false) : setOpenMenu(true);
        }}></button>
    </div>
  );
};

Opener.propTypes = {
  openMenu: PropTypes.bool.isRequired,
  setOpenMenu: PropTypes.func.isRequired
};

export default Opener;
