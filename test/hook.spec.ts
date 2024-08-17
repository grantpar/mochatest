import { expect } from 'chai';
import { Calculator } from "../src/calculator";

// describe.only and it.only forces cmd to run only this test
// describe.skip and it.skip skips the test
describe('Hooks Test', () => {
    let calc:Calculator;
    before(() => {
        console.log('before')
        calc = new Calculator();
    });

    beforeEach(() => {
        console.log('beforeEach')
    });

    afterEach(() => {
        console.log('afterEach')
    });

    after(() => {
        console.log('after')
    });

    // Nested Test Suite
    describe('Add Test Suite', () => {
        it('should return sum', () => {
            const result = calc.add(2, 5);
            expect(result).to.equal(7);
        });
    })
    describe('Subtract Test Suite', () => {
        it('should return difference', () => {
            const result = calc.subtract(7, 5);
            expect(result).to.equal(2);
        });
    })
});