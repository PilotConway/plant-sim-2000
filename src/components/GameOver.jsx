/**
 * Game over screen that is displayed when the simulation is over and shows your score.
 */
import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Score from './Score';

GameOver.propTypes = {
  /**
   * The final score of the user.
   */
  score: PropTypes.number.isRequired,
  /**
   * Callback to restart the simulation.
   */
  onRestart: PropTypes.func.isRequired,
};

export default function GameOver({ score, onRestart }) {
  return (
    <React.Fragment>
      <Score score={score} />
      <Typography variant="h3">Game Over</Typography>
      <Typography variant="h5">Your plant: {score > 0 ? 'Survived!' : 'Died'}</Typography>
      <Button variant="contained" onClick={onRestart}>
        Play Again
      </Button>
    </React.Fragment>
  );
}
