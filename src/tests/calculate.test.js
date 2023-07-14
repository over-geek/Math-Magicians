import calculate from '../logic/calculate';

describe('calculate function', () => {
  test('returns an object { total: null, next: \'5\' } when calculator is reset and user presses button: 5', () => {
    const calculateObject = { total: null, next: '0', operation: null };
    const result = calculate(calculateObject, '5');
    expect(result).toStrictEqual({ total: null, next: '5' });
  });

  test('returns an object { total: 200, next: null, operation: null } when user presses \'=\' button after doing the operation 100x2', () => {
    const calculateObject = { total: '100', next: '2', operation: 'x' };
    const result = calculate(calculateObject, '=');
    expect(result).toStrictEqual({ total: '200', next: null, operation: null });
  });
});
