const utils = require('../src/utils/helpers');

test('Validates numeric input', () => {
    expect(utils.isNumeric('123')).toBe(true);
    expect(utils.isNumeric('abc')).toBe(false);
});