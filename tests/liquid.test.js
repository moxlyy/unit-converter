const liquid = require('../src/conversions/liquid');

test('Converts liters to gallons', () => {
    expect(liquid.litersToGallons(1)).toBeCloseTo(0.264172);
});

test('Converts gallons to liters', () => {
    expect(liquid.gallonsToLiters(1)).toBeCloseTo(3.78541);
});