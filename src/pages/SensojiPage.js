import { Suspense } from 'react';
import { OrbitControls, Sky } from '@react-three/drei';
// import { Html, useProgress } from '@react-three/drei';
import Sensoji from '../components/models/Sensoji';

// const Loader = () => {
//   const { progress } = useProgress();
//   return <Html center>{progress} % loaded</Html>;
// };

export default function SensojiPage() {
  return (
    <>
      {/*<Canvas camera={{ position: [0, 0, 35] }}>*/}
      <Suspense fallback={null}>
        {/*<ambientLight intensity={2} />*/}
        {/*<pointLight position={[40, 40, 40]} />*/}
        <Sensoji />

        <Sky azimuth={0.5} turbidity={10} rayleigh={0.5} inclination={0.6} distance={100000} />
        <OrbitControls />
      </Suspense>
      {/*</Canvas>*/}
    </>
  );
}
