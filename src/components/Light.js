import React, { useRef } from 'react'
import { Color } from 'three'
// import { useHelper } from '@react-three/drei'

const Light = () => {
  const ref = useRef();
  // useHelper(ref, DirectionalLightHelper, 1);

  return (
    <>
      <ambientLight color={new Color(0xffffff)} intensity={0.88} />
      <directionalLight
        ref={ref}
        intensity={1}
        position={[-7, 50, 0]}
        color='yellow'
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow
      />
    </>
  );
};

export default Light;
