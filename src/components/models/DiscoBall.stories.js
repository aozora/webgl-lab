import DiscoBall from './DiscoBall';
import { Vector3 } from 'three';
import { SetupStage } from '../../stories/components/SetupStage';

export default {
  title: 'Models/Disco Ball',
  component: DiscoBall,
  decorators: [
    Story => (
      <SetupStage controls={false} cameraPosition={new Vector3(0, 0, 10)}>
        <Story />
      </SetupStage>
    )
  ]
};

export const DiscoBallStory = () => <DiscoBall />;
