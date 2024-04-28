import { 
  capitalize,
  reverseString,
  add,
  subtract,
  divide,
  multiply,
  Calculator,
  caesarCipher,
  getAverage,
  getMin,
  getMax,
  getLength,
  analyzeArray,
} from "./index";

test('first character capitalized', () => {
  expect(capitalize('string')).toBe('String');
  expect(capitalize('second string')).toBe('Second string');
  expect(capitalize('3rd string')).toBe('3rd string');
});

test('reverse string', () => {
  expect(reverseString('string')).toBe('gnirts');
  expect(reverseString('second string')).toBe('gnirts dnoces');
  expect(reverseString('3rd string')).toBe('gnirts dr3');
});

test('add functions correctly', () => {
  expect(add(2, 2)).toBe(4);
  expect(add(2, -2)).toBe(0);
  expect(add(2, 2.4123141234)).toBeCloseTo(4.4123141234);
});

test('subtract functions correctly', () => {
  expect(subtract(2, 2)).toBe(0);
  expect(subtract(2, -2)).toBe(4);
  expect(subtract(2, 2.4123141234)).toBeCloseTo(-0.4123141234);
});

test('divide functions correctly', () => {
  expect(divide(2, 2)).toBe(1);
  expect(divide(2, -2)).toBe(-1);
  expect(divide(3, 2)).toBeCloseTo(1.5);
});

test('multiply functions correctly', () => {
  expect(multiply(2, 2)).toBe(4);
  expect(multiply(2, -2)).toBe(-4);
  expect(multiply(3.5, 2)).toBe(7);
});

test('calculator object basic operations', () => {
  const calculator = Calculator();

  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.subtract(2, 2)).toBe(0);
  expect(calculator.divide(2, 2)).toBe(1);
  expect(calculator.multiply(2, 2)).toBe(4);
});

test('ceasar cipher shift characters', () => {
  expect(caesarCipher('abc', 3)).toBe('def');
  expect(caesarCipher('z', 1)).toBe('a');
  expect(caesarCipher('a', -1)).toBe('z');
  expect(caesarCipher('xyz', 3)).toBe('abc');
  expect(caesarCipher('xyzABC', 3)).toBe('abcDEF');
  expect(caesarCipher('a b', 3)).toBe('d e');
  expect(caesarCipher('Let\'s go!', 1)).toBe('Mfu\'t hp!');
});

test('get average from an array of numbers', () => {
  expect(getAverage([1,8,3,4,2,6])).toBe(4);
  expect(getAverage([2,3,5,7,8,9])).toBeCloseTo(5.67);
});

test('get min from an array of numbers', () => {
  expect(getMin([1,8,3,4,2,6])).toBe(1);
  expect(getMin([2,3,5,7,8,-9])).toBe(-9);
});

test('get max from an array of numbers', () => {
  expect(getMax([1,8,3,4,2,6])).toBe(8);
  expect(getMax([-2,3,5,7,8,9])).toBe(9);
});

test('get length of an array', () => {
  expect(getLength([1,8,3,4,2,6])).toBe(6);
  expect(getLength([-2,3,5,7,8])).toBe(5);
});

test('analyzeArray() return an object consists of average, min, max and length', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});
