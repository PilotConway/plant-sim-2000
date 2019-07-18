/**
 * The main game screen component
 */
import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Score from './Score';

import useEngine, { actions } from '../engine';

GameScreen.propTypes = {
  /**
   * Callback for when the user asks to restart the game.
   *
   * ## Signature
   *
   *  `onRestart() => void`
   */
  onRestart: PropTypes.func.isRequired,
  /**
   * Callback for when the user finishes the game. Takes a single parameter, score, that is the
   * numerical score the user achieved. 0 if the user killed the plant, and 100 if the user
   * harvested the most yeild out their crop.
   *
   * ## Signature
   *
   *  `onFinished(score: number) => void`
   */
  onFinished: PropTypes.func.isRequired,
};

export default function GameScreen({ onRestart, onFinished }) {
  const [day, weather, score, userAction, setAction] = useEngine(onFinished);
  return (
    <React.Fragment>
      <Score score={score} />
      <Typography variant="h5">Day {day}</Typography>
      <Typography variant="h6" gutterBottom>
        Current weather {weather}
      </Typography>
      <Grid
        spacing={4}
        container
        direction="column"
        justify="space-around"
        alignItems="center"
        style={{ height: '200px' }}
      >
        {userAction && (
          <Typography variant="h6">Your selection for today: {userAction} </Typography>
        )}
        <Grid container justify="center" alignItems="center">
          <Grid item xs={3}>
            <Button onClick={() => setAction(actions.light())} variant="contained">
              Give Light
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={() => setAction(actions.water())} variant="contained">
              Water Plants
            </Button>
          </Grid>
        </Grid>
        <Button onClick={onRestart}>Restart</Button>
      </Grid>
    </React.Fragment>
  );
}
