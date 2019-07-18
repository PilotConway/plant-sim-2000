/**
 * Reducer function and helpers for the game engine.
 */
import generateWeather from './generateWeather';

export const initialState = {
  userAction: 'none',
  totalLight: 0,
  totalWater: 0,
  weather: generateWeather(),
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
    case 'default': {
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
      return {
        ...state,
        userAction: 'none',
        totalLight,
        totalWater,
        weather: generateWeather(),
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
