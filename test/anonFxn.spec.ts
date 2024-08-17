import { expect } from 'chai';
import { Calculator } from "../src/calculator";
import sinon, { SinonMock, SinonSpy, SinonStub } from 'sinon';

describe.only('Anonymous Function - Spy Stub Mock Test', () => {
    let calc:Calculator;
    let spy:SinonSpy
    let stub:SinonStub;
    let mock:SinonMock;

    before(() => {
        calc = new Calculator();
    });

    afterEach(() => {
        if (spy) spy.restore();
        if (stub) stub.restore();
        if (mock) mock.restore();
    });

    describe('Anonymous Function Test', () => {
        it('should spy on anon function', () => {
            spy = sinon.spy(calc, "anonFxn");
            calc.anonFxn(3, 3);
            expect(spy.calledOnce).to.be.true;
            expect(spy.calledWith(3,3)).to.be.true;
        });

        it('should stub on anon function', () => {
            stub = sinon.stub(calc, "anonFxn").returns(9);
            const result = calc.anonFxn(3, 2);
            expect(stub.calledOnce).to.be.true;
            expect(result).to.equal(9);
        });

        it('should stub on anon function', () => {
            mock = sinon.mock(calc);
            mock.expects('anonFxn').once().returns(10);
            const result = calc.anonFxn(3, 2);
            expect(result).to.equal(10);
            mock.verify();
        });
    })
});