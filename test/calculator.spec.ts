import { expect } from 'chai';
import { Calculator } from '../src/calculator';

// have same folder and file structure as src recommended
// Arrange Act Assert

describe('Test Calculator Class', () => {
    it('should return sum', () => {
        // arrange
        const calc = new Calculator();

        // act
        const result = calc.add(2, 5);

        // assert
        expect(result).to.equal(7);
    });
    it('should return difference', () => {
        // arrange
        const calc = new Calculator();

        // act
        const result = calc.subtract(7, 5);

        // assert
        expect(result).to.equal(2);
    });
    it('should return product', () => {
        // arrange
        const calc = new Calculator();

        // act
        const result = calc.multiply(2, 5);

        // assert
        expect(result).to.equal(10);
    });
    it('should return quotient', () => {
        // arrange
        const calc = new Calculator();

        // act
        const result = calc.divide(10, 5);

        // assert
        expect(result).to.equal(2);
    });
    it('should throw error during dividing by 0', () => {
        // arrange
        const calc = new Calculator();

        // act
        // const result = calc.divide(10, 0);

        // assert
        expect(() => calc.divide(10, 0)).to.throw('Cannot Divide by 0');
    });
    it('should return random', () => {
        // arrange
        const calc = new Calculator();

        // act
        const result = calc.randomNo();
        calc.logMessage('hi');

        // assert
        expect(result).to.be.at.least(1);
        expect(result).to.be.at.most(10);
    });
});