import React from 'react';
import PropTypes from 'prop-types';
import styles from './About.css';

const About = ({ openMenu }) => {

  return (
    <div className={`${styles.AboutMenu} ${open ? styles.open : styles.closed} `}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  );
};

About.propTypes = {
  openMenu: PropTypes.bool.isRequired
};

export default About;
