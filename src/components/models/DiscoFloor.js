import React, { Fragment } from 'react';
import { Plane } from '@react-three/drei';

const DiscoFloor = (props) => {
  const tileColumns = Array.from(Array(20).keys());
  const tileRows = Array.from(Array(20).keys());

  return (
    <group {...props}>
      {
        tileRows.map((row, rowIndex) => (
          <Fragment key={rowIndex}>
            {
              tileColumns.map((column, columnIndex) => (
                <Plane key={`${rowIndex}-${columnIndex}`}
                       receiveShadow
                       args={[1, 1]}
                       rotation-x={-Math.PI / 2}
                       position={[columnIndex, 0, rowIndex]}>
                  <meshPhongMaterial
                    attach='material'
                    shininess={10}
                    color={(columnIndex + rowIndex) % 2 ? '#FFFFFF' : '#111111'} />
                </Plane>
              ))
            }
          </Fragment>
        ))
      }
    </group>
  );
};

export default DiscoFloor;
