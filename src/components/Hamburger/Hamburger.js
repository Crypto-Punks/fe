import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hamburger.css';

const Hamburger = ({ open, setOpen }) => {

  return (
    <div className={styles.ButtonContainer}>
      <button className={`${styles.Button} ${open ? styles.up : styles.down} `}
        onClick={() => {
          open ? setOpen(false) : setOpen(true);
        }}></button>
    </div>
  );
};

Hamburger.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};

export default Hamburger;
