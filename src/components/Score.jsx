/**
 * Score. Shows score as a progress to perfect yeild. At the end of 60 days you want to be
 * as close to the full progress as possible.
 */
import React from 'react';
import PropTypes from 'prop-types';

import LinearProgress from '@material-ui/core/LinearProgress';

Score.propTypes = {
  /**
   * The current score as a float percentage from 0 to 1.
   */
  score: PropTypes.number.isRequired,
};

export default function Score({ score }) {
  let color = 'primary';
  if (score < 0) {
    color = 'secondary';
  }

  return <LinearProgress variant="determinate" value={score * 100} color={color} />;
}
