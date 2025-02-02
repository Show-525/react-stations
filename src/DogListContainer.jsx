// @ts-check

import { useState,useEffect } from 'react';

export const DogListContainer = () => {
  const [breeds, setbreeds] = useState(['https://dog.ceo/api/breeds/list/all']);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((res) => res.json())
      .then((data) => setbreeds(data.message));
  }, []); 
  return (
    <>
      {breeds.map((breed) => (
        <li key={breed}>
          <a href={breed}>{breed}</a>
        </li>
      ))}
    </>
  );
};

export default DogListContainer;
