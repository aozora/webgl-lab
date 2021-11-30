import MarcelloAnimated from './MarcelloAnimated';
import { Vector3 } from 'three';
import { SetupStage } from '../../stories/components/SetupStage';
import { Meta } from '@storybook/react';

export default {
  title: 'Models/Marcello Animated',
  component: MarcelloAnimated,
  decorators: [
    Story => (
      <SetupStage controls={true}
                  adjustCamera={false}
                  cameraPosition={new Vector3(0, 0, 5)}>
        <Story />
      </SetupStage>
    )
  ]
} as Meta;

export const Idle = (): JSX.Element => <MarcelloAnimated position={[0, 0, 0]} />;

export const DancingGangnam = (): JSX.Element => <MarcelloAnimated dance={true} />;
