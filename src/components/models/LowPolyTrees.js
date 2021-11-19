/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function LowPolyTrees(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/glb/nature/low-poly-trees.glb');
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -0.72]}>
        <group position={[-4.45, -2.62, 0]} rotation={[0, 0, 1.42]}>
          <mesh castShadow receiveShadow geometry={nodes.Cylinder004.geometry} material={nodes.Cylinder004.material} />
        </group>
        <group position={[-3.82, 8.55, 0.25]} scale={[1.06, 1.06, 1.06]}>
          <mesh castShadow receiveShadow geometry={nodes.Cylinder002.geometry} material={nodes.Cylinder002.material} />
          <mesh castShadow receiveShadow geometry={nodes.Cylinder003.geometry} material={nodes.Cylinder003.material} />
        </group>
        <group position={[-15.62, -5.88, 8.33]} rotation={[0.31, 0.01, -0.52]} scale={[2.72, 2.72, 2.72]}>
          <mesh castShadow receiveShadow geometry={nodes.Cylinder006.geometry} material={nodes.Cylinder006.material} />
          <mesh castShadow receiveShadow geometry={nodes.Cylinder007.geometry} material={nodes.Cylinder007.material} />
        </group>
        <group position={[8.52, -0.63, 7.05]} rotation={[0, 0.77, 0]} scale={[3.01, 3.01, 3.01]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere001.geometry}
            material={nodes.Icosphere001.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere002.geometry}
            material={nodes.Icosphere002.material}
          />
        </group>
        <group position={[-9.71, -29.47, 19.04]} rotation={[1.06, -0.44, 1.67]} />
        <group position={[-9.71, 33.39, 19.04]} rotation={[-0.28, -0.56, 0.73]} />
        <group position={[-4.06, -3.56, -0.92]} scale={[13.38, 13.38, 13.38]}>
          <mesh castShadow receiveShadow geometry={nodes.Plane003.geometry} material={materials['Material.004']} />
        </group>
        <group position={[-4.06, -3.56, -2.76]} scale={[12.23, 12.23, 12.23]}>
          <mesh castShadow receiveShadow geometry={nodes.Plane005.geometry} material={materials['Material.003']} />
        </group>
        <group position={[-3.7, -14.5, 12.63]} scale={[1.69, 1.42, 1.69]}>
          <mesh castShadow receiveShadow geometry={nodes.Plane001.geometry} material={nodes.Plane001.material} />
          <mesh castShadow receiveShadow geometry={nodes.Plane002.geometry} material={nodes.Plane002.material} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/glb/nature/low-poly-trees.glb');