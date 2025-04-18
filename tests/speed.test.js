const speed = require('../src/conversions/speed');

test('Converts meters per second to kilometers per hour', () => {
  expect(speed.metersPerSecondToKilometersPerHour(1)).toBe(3.6);
});

test('Converts kilometers per hour to meters per second', () => {
  expect(speed.kilometersPerHourToMetersPerSecond(3.6)).toBe(1);
});

test('Converts meters per second to miles per hour', () => {
  expect(speed.metersPerSecondToMilesPerHour(1)).toBeCloseTo(2.23694, 5);
});

test('Converts miles per hour to meters per second', () => {
  expect(speed.milesPerHourToMetersPerSecond(2.23694)).toBeCloseTo(1, 5);
});