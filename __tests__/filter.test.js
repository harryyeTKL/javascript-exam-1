import { filterEvenNumbers, filterLengthWith4, filterStartWithA } from '../src/filter';

describe('filterEvenNumbers test: ', () => {
    // Please add test cases here
    // Given
    test('filter should retain even numbers', ()=>{
        const arr = [1,3,4,5,10,-100]

        const result = filterEvenNumbers(arr)
    
        expect(result).toEqual([4,10,-100])
    });
});


describe('filterLengthWith4 test', () => {
    // Please add test cases here
    test('filter should retain all string with lenth 4', ()=>{
        const arr = ['Hello','World','True', 'But','Home']

        const result = filterLengthWith4(arr)
    
        expect(result).toEqual(['True','Home'])
    });
});

describe('filterStartWithA test', () => {
    // Please add test cases here
    test('filter should retain all string with \'a\' as first character', ()=>{
        const arr = ['Hello','atom','World','True', 'But','home','apple']

        const result = filterStartWithA(arr)
    
        expect(result).toEqual(['atom','apple'])
    });
});

