import DiscoBall from './DiscoBall';
import { Setup } from '../../stories/components/Setup';
import { Vector3 } from 'three';

export default {
  title: 'Models/Disco Ball',
  component: DiscoBall,
  decorators: [
    Story => (
      <Setup controls={false} cameraPosition={new Vector3(0, 0, 10)}>
        <Story />
      </Setup>
    )
  ]
};

export const DiscoBallStory = () => <DiscoBall />;
