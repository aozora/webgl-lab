import EarthLowPoly from './EarthLowPoly';
import { Vector3 } from 'three';
import { SetupStage } from '../../stories/components/SetupStage';

export default {
  title: 'Models/Earth Low Poly',
  component: EarthLowPoly,
  decorators: [
    Story => (
      <SetupStage controls={true} cameraPosition={new Vector3(0, 15, 10)}>
        <Story />
      </SetupStage>
    )
  ]
};

export const EarthLowPolyStory = () => <EarthLowPoly scale={[.08,.08,.08]} />;
