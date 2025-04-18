const { convert } = require('../src/conversions');

test('Converts meters to kilometers', () => {
  expect(convert(1000, 'meters', 'kilometers')).toBe(1);
});

test('Converts Celsius to Fahrenheit', () => {
  expect(convert(0, 'celsius', 'fahrenheit')).toBe(32);
});

test('Converts grams to pounds', () => {
  expect(convert(453.592, 'grams', 'pounds')).toBeCloseTo(1, 5);
});

test('Converts meters per second to kilometers per hour', () => {
  expect(convert(1, 'mps', 'kmph')).toBe(3.6);
});

test('Converts liters to gallons', () => {
  expect(convert(3.78541, 'liters', 'gallons')).toBeCloseTo(1, 5);
});

test('Converts seconds to minutes', () => {
  expect(convert(60, 'seconds', 'minutes')).toBe(1);
});

test('Handles unsupported conversions', () => {
  expect(convert(1, 'unknown', 'unknown')).toBe('Conversion not supported.');
});