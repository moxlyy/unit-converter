const time = require('../src/conversions/time');

test('Converts seconds to minutes', () => {
    expect(time.secondsToMinutes(120)).toBe(2);
});

test('Converts minutes to seconds', () => {
    expect(time.minutesToSeconds(2)).toBe(120);
});