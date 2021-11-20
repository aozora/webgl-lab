import React, { Suspense } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export function Setup({
  children,
  cameraFov = 75,
  cameraPosition = new THREE.Vector3(-5, 5, 5),
  controls = true,
  lights = true,
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
        {children}

        {lights && (
          <>
            <ambientLight intensity={0.8} />
            <pointLight intensity={1} position={[0, 6, 0]} />
          </>
        )}

        {controls && <OrbitControls makeDefault />}
      </Canvas>
    </Suspense>
  );
}
