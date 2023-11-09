import { firstGrownUp, firstOrange, firstLengthOver5Name } from "../src/find";

describe("Find the first grown up ", () => {
  // Please add test cases here
  it ('should return the first number that is larger than or equal to 18', ()=>{
    const numbers = [1,3,4,90,12];
    expect(firstGrownUp(numbers)).toEqual(90);
  });

  it('should return undefined if there is no grown up in the array', () => {
    const numbers = [1,3,4,12];
    expect(firstGrownUp(numbers)).toEqual(undefined);
  });

});


describe("Find the first orange", () => {
  // Please add test cases here
  it('should return the first "orange" from the array', () => {
    const fruits = ['apple', 'banana', 'orange', 'cherry', 'grape'];
    expect(firstOrange(fruits)).toEqual('orange');
  });

  it('should return undefined if there is no "orange" in the array', () => {
    const fruits = ['apple', 'banana', 'cherry', 'grape'];
    expect(firstOrange(fruits)).toEqual(undefined);
  });
});


describe("Find the first name that its length is longer that 5", () => {
  // Please add test cases here
  it('should return the first "" from the array', () => {
    const names = ['John', 'Emily', 'Sarah', 'Michael', 'Sophia', 'Jacob', 'Olivia', 'Noah', 'Emma', 'Liam'];
    expect(firstLengthOver5Name(names)).toEqual('Michael');
  });

  it('should return undefined if there is no "orange" in the array', () => {
    const names = ['John','Noah', 'Emma', 'Liam'];
    expect(firstLengthOver5Name(names)).toEqual(undefined);
  });
});
