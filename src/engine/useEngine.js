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

const MS_PER_DAY = 500;
const MAX_DAYS = 60;

const initialState = {
  score: 0,
  light: 0,
  water: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'light': {
      const newLightValue = state.light + 1;
      return {
        ...state,
        light: newLightValue,
        score: state.water + newLightValue,
      };
    }
    case 'water': {
      const newWaterValue = state.water + 1;
      return {
        ...state,
        water: newWaterValue,
        score: state.light + newWaterValue,
      };
    }
    default:
      return state;
  }
}

export default function useEngine(onFinished) {
  // Set the day on a ref so the interval always has access to the latest.
  const currentDayRef = React.useRef();
  const [day, setDay] = React.useState(0);
  const [weather, setWeather] = React.useState('sunny');
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    currentDayRef.current = day;
    if (day === MAX_DAYS) {
      onFinished(state.score);
    }
  }, [day, state.score, onFinished]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDay(currentDayRef.current + 1);
      setWeather('cloudy');
    }, MS_PER_DAY);

    return () => clearInterval(timer);
  }, []);

  /**
   * dispatches the user action
   */
  function setAction(action) {
    dispatch(action);
  }

  return [day, weather, state.score, setAction];
}
