import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Text from './Text';

export default function Jumbo() {
  const ref = useRef();

  useFrame(
    ({ clock }) =>
      (ref.current.rotation.x =
        ref.current.rotation.y =
          ref.current.rotation.z =
            Math.sin(clock.getElapsedTime()) * 0.3)
  );


  return (
    <group ref={ref} position={[0, 10, 0]} scale={[0.9, 0.9, 0.9]}>
      <Text hAlign='center' position={[0, 10, 0]} children='MARCELLO' />
      <Text hAlign='center' position={[0, 0, 0]} children='PERSONAL' />
      <Text hAlign='center' position={[0, -10, 0]} children='SEED' />
    </group>
  );
}
