import StarDestroyer from './StarDestroyer';
import { Vector3 } from 'three';
import { SetupStage } from '../../stories/components/SetupStage';

export default {
  title: 'Models/Star Wars/Star Destroyer',
  component: StarDestroyer,
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

export const StarDestroyerStory = () => <StarDestroyer position={[0, 0, 0]} />;
