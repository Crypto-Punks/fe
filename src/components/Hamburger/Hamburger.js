import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { TOGGLE_OPEN_MENU } from '../../actions/menuActions';
import { getOpenMenu } from '../../selectors/menuSelectors';

import Arrow from '../../images/arrow.png';
import styles from './Hamburger.css';

const Hamburger = () => {
  const dispatch = useDispatch();
  const openMenu = useSelector(getOpenMenu);
  const setOpenMenu = () => dispatch({ type: TOGGLE_OPEN_MENU });

  return (
    <div className={styles.ButtonContainer}>
      <button
        className={`${styles.Button} ${openMenu ? styles.up : styles.down} `}
        onClick={setOpenMenu}><img src={Arrow}></img>
      </button>
    </div>
  );
};


export default Hamburger;
