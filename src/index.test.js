const { default: memoizeWithDispose } = require('./index');

test('should call dispose on second allotment', () => {
  const dispose = jest.fn();
  const create = memoizeWithDispose(x => x * 10, undefined, dispose);
  const ten = create(1);

  expect(ten).toBe(10);
  expect(dispose).not.toHaveBeenCalled();

  const twenty = create(2);

  expect(twenty).toBe(20);
  expect(dispose).toHaveBeenCalledTimes(1);
  expect(dispose).toHaveBeenCalledWith(10, 1);
});
