/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function TreeLime(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/glb/nature/tree-lime.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tree-lime'].geometry}
        material={materials.color_main}
      />
    </group>
  )
}

useGLTF.preload('/glb/nature/tree-lime.gltf')