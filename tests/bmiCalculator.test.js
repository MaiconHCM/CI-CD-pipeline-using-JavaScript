const calculateBMI = require('../bmiCalculator');

test('calculates BMI correctly for given weight and height', () => {
    
    expect(calculateBMI(70, 1.75)).toBeCloseTo(22.86);

});

test('throws error when height is zero', () => {
    expect(() => calculateBMI(70, 0)).toThrow('Height cannot be zero');
});


test('calculates BMI correctly for given weight and height number 2', () => {
    expect(calculateBMI(70, 1.75)).toBe(22.86);
});