// DO NOT DELETE

/**
 * @type {() => JSX.Element}
 */

import './App.css';
import { useState, useEffect } from 'react';
import Header from './Header';
import Description from './Description';
import DogListContainer from './DogListContainer';

export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg');
  const [breeds, setbreeds] = useState(['https://dog.ceo/api/breeds/list/all']);


  const randomImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => setDogUrl(data.message));
  };

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((res) => res.json())
      .then((data) => setbreeds(data.message));
  }, []);

    return (
      <div>
        <Header />
        <Description dogUrl={dogUrl} randomImage={randomImage} />
        <DogListContainer breeds={breeds} />
      </div>
    );
  };

  export default App;

// // // DO NOT DELETE

// import './App.css'
// import { useState } from 'react';

// /**
//  * @type {() => JSX.Element}
//  */

// export const App = () => {
// const [dogUrl, setdogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg');
// const headerstyle = {
//   textAlign: 'center',
//   backgroundColor: '#f5f5f5',
// }

// const randomImage = () => {
//   fetch('https://dog.ceo/api/breeds/image/random')
//     .then((res) => res.json())
//     .then((data) => setdogUrl(data.message));
// };

// return (
//   <div>
//     <header style={headerstyle}>
//       <h1>Dogアプリ</h1>
//     </header>
//     <img src={dogUrl}  alt="dog" /><br />
//     <button onClick={randomImage}>ランダム画像切り替え</button>
//   </div>
// );
// };
