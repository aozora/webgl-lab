import MarcelloAnimated from './MarcelloAnimated';
import { Vector3 } from 'three';
import { SetupStage } from '../../stories/components/SetupStage';

export default {
  title: 'Models/Marcello Animated',
  component: MarcelloAnimated,
  decorators: [
    Story => (
      <SetupStage controls={true}
                  adjustCamera={false}
                  gizmo={true}
                  cameraPosition={new Vector3(0, 2, 5)}>
        <Story />
      </SetupStage>
    )
  ]
};

export const Idle = () => <MarcelloAnimated />;

export const DancingGangnam = () => <MarcelloAnimated dance={true} />;
