import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Hamburger.css';
import { getOpenMenu } from '../../selectors/menuSelectors';
import { TOGGLE_OPEN_MENU } from '../../actions/menuActions';

const Hamburger = () => {
  const openMenu = useSelector(getOpenMenu);
  const dispatch = useDispatch();
  const setOpenMenu = () => dispatch({ type: TOGGLE_OPEN_MENU });

  return (
    <div className={styles.ButtonContainer}>
      <button
        className={`${styles.Button} ${openMenu ? styles.up : styles.down} `}
        onClick={setOpenMenu}>
      </button>
    </div>
  );
};


export default Hamburger;
