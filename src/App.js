import React, { useCallback, useRef } from 'react';
import { Loader } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useStore } from './store';
import IntroTati from './components/IntroTati';
import IntroMountains from './components/IntroMountains';
import IntroMartialArts from './components/IntroMartialArts';
import IntroJapan from './components/IntroJapan';
// import ThankYou from './components/ThankYou';
import Intro from './components/Intro';
import IntroMoviesBooks from './components/IntroMoviesBooks';

gsap.registerPlugin(CSSPlugin);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

function App() {
  const camera = useRef();

  // buttons
  const startButtonRef = useRef();
  const nextRoomRef = useRef();
  const [changeRoom, currentRoomIndex] = useStore(state => [state.changeRoom, state.currentRoomIndex]);
  const timeline = useRef();

  const start = useCallback(() => {
    timeline.current = gsap
      .timeline({ paused: true })
      .to(startButtonRef.current, {
        scaleX: 0,
        scaleY: 0,
        duration: 0.5,
        ease: 'power4.out'
      })
      .to(camera.current.position, {
        y: -60,
        duration: 2
      })
      .to(camera.current.position, {
        z: 18.81,
        duration: 2,
        onComplete: () => {
          changeRoom(1);
        }
      });

    timeline.current.play();
  }, [changeRoom]);

  const nextRoom = useCallback(() => {
    changeRoom(currentRoomIndex + 1);

    if (currentRoomIndex === 6) {
      // redirect to new page
    }

    gsap.to(window, { duration: 1.5, ease: 'none', scrollTo: `#room${currentRoomIndex}` });
  }, [changeRoom, currentRoomIndex]);

  return (
    <div id="canvas-container">
      <Loader
        dataStyles={{
          fontSize: '1rem',
          color: '#ffffff'
        }}
      />

      <Intro cameraRef={camera} />

      {currentRoomIndex === 0 && (
        <button ref={startButtonRef} type="button" className="start-button" onClick={start}>
          Start
        </button>
      )}

      {currentRoomIndex === 1 && (
        <button ref={nextRoomRef} type="button" className="next-room" onClick={nextRoom}>
          Next
        </button>
      )}

      <IntroTati nextRoom={nextRoom} />

      <IntroMountains nextRoom={nextRoom} />

      <IntroMartialArts nextRoom={nextRoom} />

      <IntroJapan nextRoom={nextRoom} />

      <IntroMoviesBooks nextRoom={nextRoom} />

      {/*<ThankYou />*/}
    </div>
  );
}

export default App;
