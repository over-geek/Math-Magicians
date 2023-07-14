import operate from '../logic/operate';

describe('operate function', () => {
  test('returns 7, when we pass 5 and 2, and the addition operator', () => {
    const numberOne = 5;
    const numberTwo = 2;
    const operation = '+';
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe('7');
  });

  test('returns 4, when we pass 10 and 6, and the subtraction operator', () => {
    const numberOne = 10;
    const numberTwo = 6;
    const operation = '-';
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe('4');
  });

  test('returns 10, when we pass 5 and 2, and the multiplication operator', () => {
    const numberOne = 5;
    const numberTwo = 2;
    const operation = 'x';
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe('10');
  });

  test('returns 5, when we pass 15 and 3, and the division operator', () => {
    const numberOne = 15;
    const numberTwo = 3;
    const operation = '÷';
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe('5');
  });

  test('returns Can\'t find modulo as can\'t divide by 0, when we pass 30 and 0, and the modulus operator', () => {
    const numberOne = 30;
    const numberTwo = 0;
    const operation = '%';
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe('Can\'t find modulo as can\'t divide by 0');
  });
});
