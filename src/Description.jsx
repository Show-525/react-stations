// @ts-check
import { DogImage } from './DogImage';
import { useState } from 'react';

export const Description = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg');

  const randomImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => setDogUrl(data.message));
  };

  return (
    <div>
      <DogImage imageUrl={dogUrl} />
      <br />
      <button onClick={randomImage}>画像切り替える</button>
    </div>
  );
};

export default Description;
