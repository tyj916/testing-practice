function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function Calculator() {
  return {
    add,
    subtract,
    divide,
    multiply,
  }
}

function caesarCipher(string, key) {
  // should be using unicode but i'm lazy
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  function getCharCode(char) {
    const charCode = alphabet.indexOf(char);

    if (charCode === -1) return char;

    return charCode;
  }

  function getLowercaseCode(code) {
    const newCode = code + key;

    if (newCode > 25) return newCode - 26;
    if (newCode < 0) return newCode + 26;

    return newCode;
  }

  function getUppercaseCode(code) {
    const newCode = code + key;

    if (newCode > 51) return newCode - 26;
    if (newCode < 26) return newCode + 26;

    return newCode;
  }

  function getShiftedCode(code) {
    if (code >= 0 && code <= 25) {
      return getLowercaseCode(code);
    } else {
      return getUppercaseCode(code);
    }
  }

  return string.split('').map((char) => {
    const currentCode = getCharCode(char);

    if (typeof currentCode !== 'number') return currentCode;

    const newCode = getShiftedCode(currentCode);
    return alphabet[newCode];
  }).join('');
}

function getAverage(array) {
  return array.reduce((accumulator, current) => accumulator + current) / array.length;
}

function getMin(array) {
  let min = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) min = array[i];
  }

  return min;
}

function getMax(array) {
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) max = array[i];
  }

  return max;
}

function getLength(array) {
  return array.length;
}

function analyzeArray(array) {
  return {
    average: getAverage(array),
    min: getMin(array),
    max: getMax(array),
    length: getLength(array),
  }
}

export { 
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
};

(function () {
  caesarCipher('abc', 1);
})();