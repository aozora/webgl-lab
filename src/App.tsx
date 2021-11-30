import React, { useRef } from 'react';
import { Loader } from '@react-three/drei';
// import ThankYou from './components/ThankYou';
import Intro from './components/Intro';


function App(): JSX.Element {
  const camera = useRef();

  return (
    <div id='canvas-container'>
      <Loader
        dataStyles={{
          fontSize: '1rem',
          color: '#ffffff'
        }}
      />

      <Intro cameraRef={camera} />

    </div>
  );
}

export default App;
