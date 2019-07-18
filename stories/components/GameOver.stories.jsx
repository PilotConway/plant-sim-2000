import React from 'react';

import { storiesOf } from '@storybook/react';

import GameOver from '../../src/components/GameOver';

storiesOf('Components/GameOver', module)
  .add('with 0 Score', () => <GameOver score={0} />)
  .add('with Perfect Score', () => <GameOver score={100} />);
