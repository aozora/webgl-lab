import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Preload, ScrollControls, Scroll, useScroll, Image } from '@react-three/drei';

const Images = () => {
  const { height } = useThree(state => state.viewport);
  const data = useScroll();
  const group = useRef();

  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 3;
    group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[4].material.zoom = 1 + data.range(1.25 / 3, 1 / 3) / 1;
    // group.current.children[5].material.zoom = 1 + data.range(1.8 / 3, 1 / 3) / 3;
    group.current.children[5].material.zoom = 1 + (1 - data.range(2 / 3, 1 / 3)) / 3;
    // group.current.children[5].material.grayscale = 1 - data.range(1.6 / 3, 1 / 3);
  });

  return (
    <group ref={group}>
      <Image position={[-2, 0, 0]} scale={[4, height, 1]} url="/img/mountains/IMG_0528.jpeg" />
      <Image position={[2, 0, 1]} scale={3} url="/img/mountains/IMG_0844.jpeg" />
      <Image position={[-2.3, -height, 2]} scale={[1, 3, 1]} url="/img/mountains/IMG_0755.jpeg" />
      <Image position={[-0.6, -height, 3]} scale={[1, 2, 1]} url="/img/mountains/IMG_0399.jpeg" />
      <Image position={[0.75, -height, 3.5]} scale={1.5} url="/img/mountains/IMG_0497.jpeg" />
      <Image segments={1} position={[0, -height * 1.5, 2.5]} scale={[6, 4, 1]} url="/img/mountains/IMG_0904.jpeg" />
    </group>
  );
};

const IntroMountains = ({ nextRoom }) => {
  return (
    <article className="intro-mountains">
      <Canvas id="room2" gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ScrollControls damping={4} pages={3}>
            <Scroll>
              <Images />
            </Scroll>
            <Scroll html>
              <h1 style={{ position: 'absolute', top: '10vh', left: '0.5em', fontSize: '4vw' }}>the mountains</h1>
              <h1 style={{ position: 'absolute', top: '80vh', left: '60vw', fontSize: '4vw' }}>are calling</h1>
              <h1 style={{ position: 'absolute', top: '110vh', left: '40vw', fontSize: '4vw' }}>and</h1>
              <h1 style={{ position: 'absolute', top: '168.5vh', left: '40vw', fontSize: '4vw', width: '60vw' }}>
                I must go
              </h1>
              <h1
                style={{
                  position: 'absolute',
                  top: '180.5vh',
                  left: '0',
                  textAlign: 'center',
                  fontSize: '1vw',
                  width: '100vw'
                }}
              >
                (John Muir, Scottish naturalist and mountaineer, 1838-1914)
              </h1>
            </Scroll>
          </ScrollControls>
          <Preload />
        </Suspense>
      </Canvas>

      <button type="button" className="next-room no-sticky" onClick={nextRoom} style={{ marginTop: '3.5rem' }}>
        Next
      </button>
    </article>
  );
};

export default IntroMountains;
