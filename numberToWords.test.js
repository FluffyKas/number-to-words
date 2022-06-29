const numberToWords = require("./numberToWords");

test('test1', () => {
  expect(numberToWords(7)).toBe('seven');
});
test('test2', () => {
  expect(numberToWords(42)).toBe('forty-two');
});
test('test3', () => {
  expect(numberToWords(1999)).toBe('one thousand nine hundred and ninety-nine');
});
test('test4', () => {
  expect(numberToWords(2001)).toBe('two thousand and one');
});
test('test5', () => {
  expect(numberToWords(17999)).toBe('seventeen thousand nine hundred and ninety-nine');
});
test('test6', () => {
  expect(numberToWords(100001)).toBe('one hundred thousand and one');
});
test('test7', () => {
  expect(numberToWords(342251)).toBe('three hundred and forty-two thousand two hundred and fifty-one');
});
test('test8', () => {
  expect(numberToWords(1300420)).toBe('one million three hundred thousand four hundred and twenty');
});