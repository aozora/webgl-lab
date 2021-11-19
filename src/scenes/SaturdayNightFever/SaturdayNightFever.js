import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import DiscoBall from '../../components/models/DiscoBall';
import { PositionalAudio, Stage, Preload, PerspectiveCamera } from '@react-three/drei';
import MarcelloAnimated from '../../components/models/MarcelloAnimated';
import SaturdayNightFeverLights from './SaturdayNightFeverLights';
import DiscoFloor from '../../components/models/DiscoFloor';
// import { useStore } from '../../store';
import Text from '../../components/models/Text';
// import { useInView } from 'react-intersection-observer';

const SaturdayNightFever = ({ soundOn = true }) => {
  const canvasRef = useRef();
  const cameraRef = useRef();
  const soundRef = useRef();

  const Loading = () => {
    return <h2>Loading...</h2>;
  };

  return (
    <Suspense fallback={<Loading />}>
      <Canvas
        ref={canvasRef}
        resize={{ scroll: false }}
        shadows
        // camera={{ position: [0, 5, 11] }}
        // onCreated={({ gl }) => {
        //   gl.setClearColor('#202020');
        // }}
      >
        <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 5, 7]} />

        <Stage
          position={[0, -2.8, 0]}
          contactShadow // Optional: creates a contactshadow underneath the content (default=true)
          shadows // Optional: lights cast shadow (default=true)
          adjustCamera={false} // Optional: zooms the content in (default=true)
          intensity={1} // Optional: light intensity (default=1)
          environment="city" // Optional: environment (default=city)
          preset="rembrandt" // Optional: rembrandt (default) | portrait | upfront | soft
        >
          {/*<fog attach='fog' args={['#202020', 1, 20]} />*/}

          <SaturdayNightFeverLights />

          <Text
            position={[0, 11, -8]}
            hAlign="center"
            color={'#ffffff'}
            size={0.2}
            depth={2}
            rotation={[0.3, 0, 0]}
            children="Thank you!"
          />

          <DiscoFloor position={[-10, -1.11, -10]} />

          <DiscoBall position={[0, 5.5, 0]} scale={[0.8, 0.8, 0.8]} />

          <MarcelloAnimated dance={true} position={[0, 0.88, 0]} />
        </Stage>

        <PositionalAudio
          ref={soundRef}
          url="/sound/PSY-GANGNAM-STYLE.ogg" // Url of the sound file
          distance={1} // Camera distance (default=1)
          loop={false} // Repat play (default=true)
          autoplay={soundOn}
        />

        {/*<OrbitControls/>*/}
        <Preload all />
      </Canvas>
    </Suspense>
  );
};

export default SaturdayNightFever;
