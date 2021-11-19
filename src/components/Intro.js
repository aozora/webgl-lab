import { Canvas } from '@react-three/fiber';
import { FlyControls, PerspectiveCamera, Preload, Sky } from '@react-three/drei';
import Light from './Light';
import React, { Suspense } from 'react';
import Jumbo from './models/Jumbo';
import Birds from './models/Birds';
import Tati from './models/Tati';
import TheRiver from './models/TheRiver';
import MarcelloIntro from './models/MarcelloIntro';

const Intro = ({cameraRef})=>{
  return(
    <Canvas>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 28]} />
      <Light />

      <Suspense fallback={null}>
        <group position={[0, 0, -35]}>
          <Jumbo />
          <Birds />
        </group>

        <group position={[0, -62, 0]}>
          <MarcelloIntro position={[1, 0.9, 8.2]} />
          <Tati position={[-1.47, -1.2, 8.72]} />
          {/*<LowPolyTrees position={[4, 0, -8]} />*/}
          <TheRiver position={[-1.12, -1.52, 3.78]} rotation={[0, -0.3, 0]} />
        </group>
      </Suspense>

      <Sky azimuth={0.5} turbidity={10} rayleigh={0.5} inclination={0.6} distance={100000} />

      <FlyControls movementSpeed={1.2} rollSpeed={0.008} />

      <Preload all />
    </Canvas>
  )
}

export default Intro;
