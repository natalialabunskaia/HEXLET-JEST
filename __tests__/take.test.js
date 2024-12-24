import take from '../src/take.js';

test('take', () => {
  const data = [1, 2, 3, 4];
  expect(take(data, 2).length).toBe(2);
  expect(take(data, 0).length).toBe(0);
  expect(take([], 5).length).toBe(0);
});
