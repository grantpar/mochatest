import { expect } from 'chai';
import { Calculator } from "../src/calculator";
import sinon, { SinonMock, SinonSpy, SinonStub } from 'sinon';

// spy - observe a function, record information, track if it was called and how many times it is called, what params are passed
// stub - replace a function, control behavior of function, return predefined values, execute specific code
//      - used to isolate the code from external factors such as database calls or http requests
// mock - combination of spy and stub, observe and control functions by specifying expected behavior and return values
//      - used to check if a function was called with specific params and make it return specific values

describe('Spy Stub Mock Test', () => {
    let calc:Calculator;
    let spy:SinonSpy
    let stub:SinonStub;
    let mock:SinonMock;

    before(() => {
        console.log('before')
        calc = new Calculator();
    });

    beforeEach(() => {
        console.log('beforeEach')
    });

    afterEach(() => {
        console.log('afterEach')
        if (spy) spy.restore();
        if (stub) stub.restore();
        if (mock) mock.restore();
    });

    after(() => {
        console.log('after')
    });

    describe('Add Random Test Suite', () => {
        it('should return sum', () => {
            spy = sinon.spy(calc, 'addRandom');

            stub = sinon.stub(calc, 'randomNo').returns(2);

            mock = sinon.mock(calc);
            let expectation = mock.expects('logMessage').exactly(1).withArgs('logging add')
            // let expectation = mock.expects('logMessage').exactly(1).withArgs('logging add').returns('');

            const result = calc.addRandom(2, 4);
            expect(result).to.equal(8);

            expect(spy.calledOnceWith(2, 4)).to.be.true;

            expectation.verify();
        });
    })
    describe('Subtract Test Suite', () => {
        it('should return difference', () => {
            spy = sinon.spy(calc, 'subtract');
            const result = calc.subtract(7, 5);
            expect(result).to.equal(2);
            expect(spy.calledOnceWith(7, 5)).to.be.true;
            spy.restore;
        });
    })
});