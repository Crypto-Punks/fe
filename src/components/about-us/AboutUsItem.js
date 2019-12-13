import React from 'react';
import PropTypes from 'prop-types';
import styles from '../about-us/AboutUs.css';

const Person = ({ name, spiritAnimal, image, blurb, website }) => {
  return (
    <div>
      <h1>{name}</h1>
      <div className={styles.HeadShot}>
        <img src={image} alt={name} />
        <p>{blurb}</p>
      </div>
      <h2>Spirit Animal: {spiritAnimal}</h2>
      <a target='_blank' rel="noopener noreferrer" href={website}>{`${name}'s Website`}</a>
    </div>
  );
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  spiritAnimal: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired
};

export default Person;
