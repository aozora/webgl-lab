import { OrbitControls } from '@react-three/drei';
import Tati from '../components/models/Tati';

export default function TatiPage() {
  return (
    <>
      <Tati position={[10, 0, 0]} />

      <OrbitControls />
    </>
  );
}
