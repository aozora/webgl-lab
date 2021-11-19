import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useDepthBuffer, SpotLight } from '@react-three/drei';

const SaturdayNightFeverLights = () => {
  const spotLight1Ref = useRef();
  const spotLight2Ref = useRef();
  const spotLight3Ref = useRef();
  const spotLight4Ref = useRef();
  const spotLight5Ref = useRef();
  const spotLight6Ref = useRef();

  const depthBuffer = useDepthBuffer({ frames: 1 });

  useFrame(({ clock }) => {
    function animateSpotLight(light, ratio, distance) {
      // gsap.to(light, {
      //   angle: (Math.random() * 0.7) + 0.1,
      //   penumbra: Math.random() + 1,
      //   duration: 5,
      //   ease: 'power2.out'
      // });
      const time = clock.getElapsedTime();
      light.target.position.x = Math.cos(time * ratio) * distance;
      // light.position.y = Math.sin(time * ratio) + Math.sin(time * 2.5) + 5;
      light.target.position.z = Math.sin(time * ratio) * distance;

    }

    animateSpotLight(spotLight1Ref.current, 0.5, 4);
    animateSpotLight(spotLight2Ref.current, 0.83, 5);
    animateSpotLight(spotLight3Ref.current, 0.2, 6);
    animateSpotLight(spotLight4Ref.current, 0.5, 4);
    animateSpotLight(spotLight5Ref.current, 0.83, 2);
    animateSpotLight(spotLight6Ref.current, 0.6, 3);
  });

  return (
    <>
      <SpotLight ref={spotLight2Ref} position={[-6, 6, -1]} color={'#fffb00'} castShadow depthBuffer={depthBuffer} penumbra={1} distance={20} angle={0.6} attenuation={10} anglePower={5} intensity={3} />
      <SpotLight ref={spotLight3Ref} position={[6, 6, -1]} color={'#9346ec'} castShadow depthBuffer={depthBuffer} penumbra={1} distance={20} angle={0.6} attenuation={10} anglePower={5} intensity={3} />
      <SpotLight ref={spotLight1Ref} position={[6, 6, 8]} color={'#ff001e'} castShadow depthBuffer={depthBuffer} penumbra={1} distance={20} angle={0.6} attenuation={10} anglePower={5} intensity={3} />
      <SpotLight ref={spotLight4Ref} position={[-6, 6, 8]} color={'#e600ff'} castShadow depthBuffer={depthBuffer} penumbra={1} distance={20} angle={0.6} attenuation={10} anglePower={5} intensity={3} />

      <SpotLight ref={spotLight5Ref} position={[3, 6, 0]} color={'#0bb40b'} castShadow depthBuffer={depthBuffer} penumbra={1} distance={20} angle={0.6} attenuation={10} anglePower={5} intensity={3} />
      <SpotLight ref={spotLight6Ref} position={[-3, 6, 0]} color={'#ffffff'} castShadow depthBuffer={depthBuffer} penumbra={1} distance={20} angle={0.6} attenuation={10} anglePower={5} intensity={3} />

      {spotLight1Ref && spotLight1Ref.current && <primitive object={spotLight1Ref.current.target} />}
      {spotLight2Ref && spotLight2Ref.current && <primitive object={spotLight2Ref.current.target} />}
      {spotLight3Ref && spotLight3Ref.current && <primitive object={spotLight3Ref.current.target} />}
      {spotLight4Ref && spotLight4Ref.current && <primitive object={spotLight4Ref.current.target} />}
      {spotLight5Ref && spotLight5Ref.current && <primitive object={spotLight5Ref.current.target} />}
      {spotLight6Ref && spotLight6Ref.current && <primitive object={spotLight6Ref.current.target} />}
    </>
  );
};

export default SaturdayNightFeverLights;
