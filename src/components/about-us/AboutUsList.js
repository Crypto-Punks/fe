import React from 'react';
import Developer from './AboutUsItem';
import { developerData } from '../../developerData';

const DeveloperList = () => {
  const developerElements = developerData.map((developer, i) => {
    return <Developer key={i} {...developer} />;
  });
  return (
    <ul>
      {developerElements}
    </ul>
  );
};


export default (DeveloperList);
