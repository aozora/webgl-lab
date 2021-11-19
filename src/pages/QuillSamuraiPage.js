import { OrbitControls } from '@react-three/drei';
import QuillSamurai from '../components/models/QuillSamurai';

export default function QuillSamuraiPage() {
  return (
    <>
      {/*<Canvas camera={{ position: [0, 0, 35] }}>*/}
      {/*  <ambientLight intensity={2} />*/}
      {/*  <pointLight position={[40, 40, 40]} />*/}
      <QuillSamurai position={[10, 0, 0]} />

      <OrbitControls />
      {/*</Canvas>*/}
    </>
  );
}
