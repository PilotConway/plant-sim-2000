/**
 * Random weather generator.
 * Generates a random weather pattern from 'sunny', 'cloudy', 'rainy'.
 *
 * @return {string} Random weather pattern.
 */
export default function generateWeather() {
  const patterns = ['sunny', 'cloudy', 'raining'];
  const number = Math.floor(Math.random() * Math.floor(patterns.length));
  return patterns[number];
}
