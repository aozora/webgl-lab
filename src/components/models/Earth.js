/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/glb/planet-earth.glb');
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Earth_Ground_Earth_Ground_0.geometry}
          material={materials.Earth_Ground}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Earth_Water_Earth_Water_0.geometry}
          material={materials.Earth_Water}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/glb/planet-earth.glb');