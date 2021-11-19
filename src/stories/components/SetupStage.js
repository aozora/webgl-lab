import React, { Suspense } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Stage } from '@react-three/drei';

export function SetupStage({
                             children,
                             cameraFov = 75,
                             cameraPosition = new THREE.Vector3(-5, 5, 5),
                             controls = true,
                             environment = 'city',
                             ...restProps
                           }) {
  return (
    <Suspense fallback={null}>
      <Canvas
        shadows
        camera={{ position: cameraPosition, fov: cameraFov }}
        dpr={window.devicePixelRatio}
        {...restProps}
      >
        <Stage
          position={[0, -2.8, 0]}
          contactShadow // Optional: creates a contactshadow underneath the content (default=true)
          shadows // Optional: lights cast shadow (default=true)
          adjustCamera={false} // Optional: zooms the content in (default=true)
          intensity={1} // Optional: light intensity (default=1)
          environment={environment} // Optional: environment (default=city)
          preset='rembrandt' // Optional: rembrandt (default) | portrait | upfront | soft
        >
          {children}

        </Stage>

        {controls && <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />}
      </Canvas>
    </Suspense>
  );
}
