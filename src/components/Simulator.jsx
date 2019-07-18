/**
 * The main component for the simulator. This basically
 * handles the main game states and switches between the different views.
 */
import React from 'react';

import Welcome from './Welcome';
import GameScreen from './GameScreen';
import GameOver from './GameOver';

export default function Simulator() {
  const [gameState, setGameState] = React.useState('ready');
  const [score, setGameScore] = React.useState(0);

  const onFinshed = score => {
    setGameState('finished');
    setGameScore(score);
  };

  const onRestart = () => {
    setGameScore(0);
    setGameState('ready');
  };

  switch (gameState) {
    case 'start': {
      return <GameScreen onFinished={onFinshed} onRestart={onRestart} />;
    }
    case 'finished': {
      return <GameOver onRestart={onRestart} score={score} />;
    }
    case 'ready':
    default: {
      return <Welcome onStart={() => setGameState('start')} />;
    }
  }
}
