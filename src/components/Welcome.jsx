/**
 * Welcome screen
 */
import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

Welcome.propTypes = {
  /**
   * Callback that is called when the user starts the game.
   *
   * ## Signature
   *    `onState() => void`
   */
  onStart: PropTypes.func.isRequired,
};

export default function Welcome({ onStart }) {
  return (
    <React.Fragment>
      <Typography variant="h3" gutterBottom>
        Welcome to Plant Sim 2000
      </Typography>
      <Button variant="contained" color="primary" onClick={onStart}>
        Let's Plant!
      </Button>
    </React.Fragment>
  );
}
