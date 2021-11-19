import { Suspense } from 'react';
import Birds from '../components/models/Birds';
import Jumbo from '../components/models/Jumbo';
import { OrbitControls, Sky } from '@react-three/drei';

export default function BirdsPage() {
  return (
    <>
      {/*<Canvas camera={{ position: [-0.5, 0, 35] }} scale={[0.8, 0.8, 0.8]}>*/}
      {/*  <ambientLight intensity={2} />*/}
      {/*  <pointLight position={[40, 40, 40]} />*/}
      <Suspense fallback={null}>
        <group position={[0, 0, -35]}>
          <Jumbo />
          <Birds />
        </group>
      </Suspense>
      <Sky azimuth={0.5} turbidity={10} rayleigh={0.5} inclination={0.6} distance={100000} />
      {/*</Canvas>*/}
      <OrbitControls position={[0, 0, 0]} makeDefault />
    </>
  );
}
