const weight = require('../src/conversions/weight');

test('Converts grams to kilograms', () => {
  expect(weight.gramsToKilograms(1000)).toBe(1);
});

test('Converts kilograms to grams', () => {
  expect(weight.kilogramsToGrams(1)).toBe(1000);
});

test('Converts grams to pounds', () => {
  expect(weight.gramsToPounds(453.592)).toBeCloseTo(1, 5);
});

test('Converts pounds to grams', () => {
  expect(weight.poundsToGrams(1)).toBeCloseTo(453.592, 5);
});

test('Converts grams to ounces', () => {
  expect(weight.gramsToOunces(28.3495)).toBeCloseTo(1, 5);
});

test('Converts ounces to grams', () => {
  expect(weight.ouncesToGrams(1)).toBeCloseTo(28.3495, 5);
});