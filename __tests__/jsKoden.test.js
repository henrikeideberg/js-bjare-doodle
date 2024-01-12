// https://www.stanleyulili.com/node/node-modules-import-and-use-functions-from-another-file
const lib = require('./../jsKoden.js');

test('Summera 1 och 2 ska bli 3', () => {
  expect(lib.summera(1, 2)).toBe(3);
});

test('Summera 0 och 0 ska bli 0', () => {
  expect(lib.summera(0, 0)).toBe(0);
})

test('Summera a och 5 ska bli NaN', () => {
  expect(lib.summera(a, 5)).toBe(NaN);
})