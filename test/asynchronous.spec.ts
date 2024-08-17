import { expect } from "chai";
import { Calculator } from "../src/calculator";

describe('Asynchronous Test', () => {
    let calc:Calculator;

    it('should work with async await', async () => {
        calc = new Calculator();

        const result = await calc.asyncPromise();

        expect(result).to.equal(4)
    });

    it('should work with promise', () => {
        calc = new Calculator();

        calc.asyncPromise().then((result) => {
            expect(result).to.equal(4)
        });
    });
});