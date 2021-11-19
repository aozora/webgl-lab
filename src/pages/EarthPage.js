import { Suspense, useRef } from 'react';
import { OrbitControls, Stage } from '@react-three/drei';
import Earth from '../components/models/Earth';

export default function EarthPage() {
  const ref = useRef();

  return (
    <>
      {/*<Canvas dpr={[1, 2]} camera={{ fov: 50 }}>*/}
      <Suspense fallback={null}>
        <Stage controls={ref} contactShadowBlur={6}>
          <Earth />
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} autoRotate makeDefault />; // {/*</Canvas>*/}
    </>
  );
}
