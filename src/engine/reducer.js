/**
 * Reducer function and helpers for the game engine.
 */
import generateWeather from './generateWeather';

export const initialState = {
  userAction: 'none',
  totalLight: 0,
  totalWater: 0,
  weather: generateWeather(),
  gameState: 'started',
  maxDays: 20,
  day: 0,
};

/**
 * Calculates the new wate and light scores for the day based
 * on user input.
 */
function calculateNewValues(state) {
  let { totalLight, totalWater, userAction, weather } = state;
  let light = 0;
  let water = 0;

  // Add 1 light or 1 water depending on user action
  switch (userAction) {
    case 'light': {
      light += 1;
      break;
    }
    case 'water': {
      water += 1;
      break;
    }
    case 'none':
    default: {
      // do nothing.
    }
  }

  // Add 1 light or 1 water depending on weather.
  switch (weather) {
    case 'sunny': {
      light += 1;
      break;
    }
    case 'raining': {
      water += 1;
      break;
    }
    case 'cloudy':
    default: {
      // do nothing
    }
  }

  // Did we over light or over water? If so, bad care taker, reduce
  // the light or water by 3 as a penalty.
  if (light > 1) {
    light = -3;
  }
  if (water > 1) {
    water = -3;
  }

  return [totalLight + light, totalWater + water];
}

/**
 * Calculates the new game state by checking if we have reached the end of the simulation.
 *
 * @param {object} state The current game state
 * @returns {string} The new game state, 'ready' or 'finished'
 */
function calculateGameState(state) {
  if (state.day === state.maxDays) {
    return 'finished';
  }
  return 'started';
}

/**
 * Reducer to take the user action and generate a new score and light/water
 * value based on the action and the current weather.
 * @param {object} state The current state
 * @param {object} action The action to mutate state.
 */
export default function reducer(state, action) {
  switch (action.type) {
    case 'updateWeather': {
      return { ...state, weather: action.value };
    }
    /**
     * Finishes the day by
     *  * calculating the new total values for light and water
     *  * resets user action
     *  * generates new weather for the next day
     */
    case 'finishDay': {
      const [totalLight, totalWater] = calculateNewValues(state);
      const gameState = calculateGameState(state);
      return {
        ...state,
        userAction: 'none',
        weather: generateWeather(),
        day: state.day + 1,
        totalLight,
        totalWater,
        gameState,
      };
    }
    case 'light':
    case 'water': {
      return {
        ...state,
        userAction: action.value,
      };
    }
    default:
      return state;
  }
}
