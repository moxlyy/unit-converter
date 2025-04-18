const temperature = require('../src/conversions/temperature');

test('Converts Celsius to Fahrenheit', () => {
  expect(temperature.celsiusToFahrenheit(0)).toBe(32);
});

test('Converts Fahrenheit to Celsius', () => {
  expect(temperature.fahrenheitToCelsius(32)).toBe(0);
});

test('Converts Kelvin to Celsius', () => {
  expect(temperature.kelvinToCelsius(273.15)).toBe(0);
});