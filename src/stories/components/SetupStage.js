import React, { Suspense } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { TrackballControls, Stage, GizmoHelper, GizmoViewport } from '@react-three/drei';

export function SetupStage({
                             children,
                             cameraFov = 75,
                             cameraPosition = new THREE.Vector3(-5, 5, 5),
                             controls = true,
                             gizmo = false,
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

        {/*{gizmo &&*/}
        {/*<GizmoHelper*/}
        {/*  alignment='bottom-right' // widget alignment within scene*/}
        {/*  margin={[80, 80]} // widget margins (X, Y)*/}
        {/*>*/}
        {/*  <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor='black' />*/}
        {/*</GizmoHelper>*/}
        {/*}*/}

        {controls && <TrackballControls makeDefault enablePan={true} enableZoom={true} enableRotate={true} />}
      </Canvas>
    </Suspense>
  );
}
