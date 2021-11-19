import React, { Suspense, useRef, useState } from 'react';
import { Stars } from '@react-three/drei';
import XWing from './x-wing';
import TieFighter from './tie-fighter';
import Tattooine from './Tattooine';
import StarDestroyer from './StarDestroyer';
import MilleniumFalcon from './MilleniumFalcon';

const StarWars = () => {
  // const xwing = useRef();
  // const tie = useRef();
  // const [start] = useState(() => Math.random() * 5000);

  // const factor = 0.5 + Math.random();

  // useFrame((state, delta) => {
  //   if (xwing.current && tie.current) {
  //     // console.log(state.clock.elapsedTime);
  //     xwing.current.position.z = Math.sin(start + state.clock.elapsedTime) * 5;
  //     tie.current.position.z = Math.sin(start + state.clock.elapsedTime) * 5 + 50;
  //     // mesh.current.rotation.x = Math.PI / 2 + (Math.sin(start + state.clock.elapsedTime) * Math.PI) / 10;
  //     // mesh.current.rotation.y = (Math.sin(start + state.clock.elapsedTime) * Math.PI) / 2;
  //     // group.current.rotation.y += Math.sin((delta * factor) / 2) * Math.cos((delta * factor) / 2) * 1.5;
  //   }
  // });

  return (
    <Suspense fallback={null}>
      <Stars radius={300} depth={50} count={10000} />

      <XWing position={[0, 0, 50]} />
      <TieFighter position={[-6, 0, 25]} />
      <MilleniumFalcon position={[-30, 0, 50]} scale={[3, 3, 3]} rotation={[0, 135, 0]} />

      <Tattooine position={[0, -700, 0]} scale={[500, 500, 500]} />
      <StarDestroyer position={[42, -4, 100]} scale={[30, 30, 30]} />
    </Suspense>
  );
};

export default StarWars;
