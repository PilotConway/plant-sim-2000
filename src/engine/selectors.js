import { MAX_DAYS } from './constants';

/**
 * Selector to compute score from the state.
 * Score is total light + total water / max days * 2.
 * In a perfect world, the plant gets 1 sun and 1 water per day. So max score is 2 * days. BUT
 * since weather is random and you can only add 1 water or 1 light per day, you can't really get to
 * a perfect yield, so closer to 100% the better.
 */
export function scoreSelector(state) {
  return (state.totalLight + state.totalWater) / (MAX_DAYS * 2);
}

/**
 * selector to get the user action.
 * @return {string} Returns null if the user has not entered an action, otherwise, returns the
 * action string.
 *
 */
export function userActionSelector(state) {
  if (state.userAction === 'none') {
    return null;
  }

  return state.userAction;
}
