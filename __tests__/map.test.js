import { addSerialNumber, halfNumbers, spliceNames } from "../src/map";

describe('halfNumbers function', () => {
  it('should return an array with numbers halved', () => {
    expect(halfNumbers([4, 8, 6])).toEqual([2, 4, 3]);
  });
});

describe('spliceNames function', () => {
  it('should return an array with names prepended by "Hello "', () => {
    expect(spliceNames(['John', 'Jane'])).toEqual(['Hello John', 'Hello Jane']);
  });
});

describe('addSerialNumber function', () => {
  it('should return an array with each fruit prepended by its index number', () => {
    expect(addSerialNumber(['Apple', 'Banana'])).toEqual(['1. Apple', '2. Banana']);
  });
});
