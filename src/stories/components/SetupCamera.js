import React, { useRef } from 'react';
import { PerspectiveCamera, useHelper } from '@react-three/drei';
import { CameraHelper } from 'three';

const SetupCamera = ({ cameraPosition, cameraFov }) => {
  const camera = useRef();
  useHelper(camera, CameraHelper, 1, 'hotpink');

  return (
    <PerspectiveCamera makeDefault ref={camera} position={cameraPosition} fov={cameraFov} />
  );
};

export default SetupCamera;
