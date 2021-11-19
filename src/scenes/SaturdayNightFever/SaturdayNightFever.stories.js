import SaturdayNightFever from './SaturdayNightFever';

export default {
  title: 'Scenes/Saturday Night Fever',
  component: SaturdayNightFever,
  argTypes: {
    soundOn: { control: { type: 'boolean' } }
  }
  // decorators: [
  //   Story => (
  //     <Setup controls={false} cameraPosition={new Vector3(0, 0, 10)}>
  //       <Story />
  //     </Setup>
  //   ),
  //   withKnobs
  // ]
};

export const SaturdayNightFeverStory = () => <SaturdayNightFever />;
SaturdayNightFeverStory.storyName = 'SaturdayNightFever';
SaturdayNightFeverStory.args = {
  soundOn: false
};
