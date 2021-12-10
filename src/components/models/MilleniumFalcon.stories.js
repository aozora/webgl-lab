import MilleniumFalcon from './MilleniumFalcon';
import { Vector3 } from 'three';
import { SetupStage } from '../../stories/components/SetupStage';

export default {
  title: 'Models/Star Wars/Millenium Falcon',
  component: MilleniumFalcon,
  decorators: [
    Story => (
      <SetupStage controls={true}
                  adjustCamera={false}
                  cameraPosition={new Vector3(0, 0, 5)}>
        <Story />
      </SetupStage>
    )
  ]
};

export const MilleniumFalconStory = () => <MilleniumFalcon position={[0, 0, 0]} />;
