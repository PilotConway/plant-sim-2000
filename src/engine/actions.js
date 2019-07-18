const actions = {
  /**
   * Water action adds water to the crops.
   */
  water: () => ({
    type: 'water',
    value: 'water',
  }),
  /**
   * Light action adds light to the crops.
   */
  light: () => ({
    type: 'light',
    value: 'light',
  }),
  /**
   * Updates the weather with the new weather pattern.
   * @param {string} weather The new weather pattern.
   */
  updateWeather: weather => ({
    type: 'updateWeather',
    value: weather,
  }),
  /**
   * Finishes the day and prompts the engine to calculate the new score.
   */
  finishDay: () => ({
    type: 'finishDay',
  }),
};

export default actions;
