const sum = require('../src.soma.js');

test('adicione 1 + 2 para ser igual a 3', () => {
  expect(sum(1, 2)).toBe(3);
});