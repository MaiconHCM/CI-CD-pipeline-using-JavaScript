function calculateBMI(weight, height) {
    if (height === 0) throw new Error('Height cannot be zero');
    return weight / (height * height);
    
}

module.exports = calculateBMI;
