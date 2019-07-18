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

const MS_PER_DAY = 2000;
const MAX_DAYS = 3;

/**
 * Selector to compute score from the state.
 * Score is total light + total water / max days * 2.
 * In a perfect world, the plant gets 1 sun and 1 water per day. So max score is 2 * days. BUT
 * since weather is random and you can only add 1 water or 1 light per day, you can't really get to
 * a perfect yield, so closer to 100% the better.
 */
function scoreSelector(state) {
  return (state.totalLight + state.totalWater) / (MAX_DAYS * 2);
}

/**
 * selector to get the user action.
 * @return {string} Returns null if the user has not entered an action, otherwise, returns the
 * action string.
 *
 */
function userActionSelector(state) {
  if (state.userAction === 'none') {
    return null;
  }

  return state.userAction;
}

export default function useEngine(onFinished) {
  const [state, dispatch] = React.useReducer(reducer, { ...initialState, maxDays: MAX_DAYS });

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
