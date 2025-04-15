const distance = require('../src/conversions/distance');

test('Converts kilometers to miles', () => {
    expect(distance.kilometersToMiles(5)).toBeCloseTo(3.11);
});

test('Converts miles to kilometers', () => {
    expect(distance.milesToKilometers(3.11)).toBeCloseTo(5);
});