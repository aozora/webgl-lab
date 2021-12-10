import TieFighter from './TieFighter';
import { Vector3 } from 'three';
import { SetupStage } from '../../stories/components/SetupStage';

export default {
  title: 'Models/Star Wars/Tie Fighter',
  component: TieFighter,
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

export const TieFighterStory = () => <TieFighter position={[0, 0, 0]} />;
