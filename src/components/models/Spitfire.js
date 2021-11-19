/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Spitfire = React.forwardRef((props, ref) => {
  // const group = useRef();
  // const mesh = useRef();
  const { nodes, materials } = useGLTF('/glb/sci-fi/Spitfire.gltf');
  // const [start] = useState(() => Math.random() * 5000);
  // const factor = 0.5 + Math.random();
  //
  // useFrame((state, delta) => {
  //   mesh.current.position.z = Math.sin(start + state.clock.elapsedTime) * 5;
  //   // mesh.current.rotation.x = Math.PI / 2 + (Math.sin(start + state.clock.elapsedTime) * Math.PI) / 10;
  //   // mesh.current.rotation.y = (Math.sin(start + state.clock.elapsedTime) * Math.PI) / 2;
  //   // group.current.rotation.y += Math.sin((delta * factor) / 2) * Math.cos((delta * factor) / 2) * 1.5;
  // });

  return (
    <group {...props} dispose={null}>
      <mesh ref={ref} castShadow receiveShadow geometry={nodes.Spitfire.geometry} material={materials.Texture} />
    </group>
  );
});

export default Spitfire;

useGLTF.preload('/glb/sci-fi/Spitfire.gltf');