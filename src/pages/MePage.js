import { OrbitControls } from '@react-three/drei';
import MarcelloStanding from '../components/models/MarcelloStanding';

export default function MePage() {
  return (
    <>
      <MarcelloStanding position={[0, 0, 0]} scale={[15, 15, 15]} />

      <OrbitControls />
    </>
  );
}
