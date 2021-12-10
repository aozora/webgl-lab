import XWing from './XWing';
import { Vector3 } from 'three';
import { SetupStage } from '../../stories/components/SetupStage';

export default {
  title: 'Models/Star Wars/X-Wing',
  component: XWing,
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

export const XWingStory = () => <XWing position={[0, 0, 0]} />;
