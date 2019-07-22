/**
 * React hooks based Game engine.
 *
 * ## Usage
 *
 * ```js
 * const [day, weather, score, setAction] = useEngine();
 * setAction(action.water):
 * ```
 */
import React from 'react';

import reducer, { initialState } from './reducer';
import actions from './actions';
import { scoreSelector, userActionSelector } from './selectors';
import { MS_PER_DAY } from './constants';

export default function useEngine(onFinished) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  /**
   * This effect creates a interval to change days.
   * On every day change, the weather is also randomly generated.
   */
  React.useEffect(() => {
    const timer = setInterval(() => {
      dispatch(actions.finishDay());
    }, MS_PER_DAY);

    return () => clearInterval(timer);
  }, []);

  /**
   * dispatches the user action
   */
  function setAction(action) {
    dispatch(action);
  }

  return [
    state.day,
    state.weather,
    scoreSelector(state),
    state.gameState,
    userActionSelector(state),
    setAction,
  ];
}
