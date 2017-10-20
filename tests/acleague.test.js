const acleague = require('../utils/acleague');

test('make 23 as three digit value prefixed with zeroes', () => {
   expect(acleague.shiftZeros(23,3)).toBe('023');

});

test('make 1 as three digit value prefixed with zeroes', () => {
    expect(acleague.shiftZeros(1,3)).toBe('001');
});

test('make 123 as three digit value prefixed with zeroes', () => {
    expect(acleague.shiftZeros(123,3)).toBe('123');
});

test('make 4 as two digit value prefixed with zeroes', () => {
    expect(acleague.shiftZeros(4,2)).toBe('04');
});

test('string to ms', () => {
    expect(acleague.timeStringToMilliseconds('02:02.849')).toBe(122849);
});


