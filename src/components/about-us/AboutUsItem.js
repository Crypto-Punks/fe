import React from 'react';
import PropTypes from 'prop-types';

const Person = ({ name, spiritAnimal, image, blurb, website }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>Spirit Animal: {spiritAnimal}</h2>
      <img src={image} alt={name}/>
      <a target='_blank' rel="noopener noreferrer" href={website}>{`${name}'s Website`}</a>
      <p>{blurb}</p>
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
