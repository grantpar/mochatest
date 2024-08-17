import { expect, should, assert } from "chai";

describe('assert style', () => { 
    it('EXPECT assertion style', () => {
        // arrange
        const name: string = 'grant';
        const age: number = 30;
        const obj: Object = {
            name: 'grant',
            age: 30,
        };
        const arr: Array<number> = [1,2,3];
        const bool: boolean = true;

        // act

        // assert

        // string
        expect(name).to.be.ok;
        expect(name).to.be.equal('grant');
        // expect(name).to.not.be.equal('grant1');
        expect(name).to.be.a('string');

        // number
        expect(age).to.be.ok;
        expect(age).to.be.equal(30);
        expect(age).to.be.a('number');

        // object
        expect(obj).to.be.ok;
        expect(obj).to.be.a('object');
        expect(obj).to.have.property('name').equal('grant');
        expect(obj).to.have.property('age').equal(30);

        // array
        expect(arr).to.be.ok;
        expect(arr).to.be.a('array');
        expect(arr).to.have.lengthOf(3);
        expect(arr).to.have.lengthOf(3).that.include(2);
        expect(arr).to.not.have.lengthOf(4).that.does.not.include(5);

        // bool
        expect(bool).to.be.ok;
        expect(bool).to.be.a('boolean');
        expect(bool).to.be.true;
    })

    it('SHOULD assertion style', () => {
        should();

        // arrange
        const name: string = 'grant';
        const age: number = 30;
        const obj: Object = {
            name: 'grant',
            age: 30,
        };
        const arr: Array<number> = [1,2,3];
        const bool: boolean = true;

        // act

        // assert

        // string
        name.should.be.ok;
        name.should.be.equal('grant');
        // name.should.not.be.equal('grant1');
        name.should.be.a('string');

        // number
        age.should.be.ok;
        age.should.be.equal(30);
        age.should.be.a('number');

        // object
        obj.should.be.ok;
        obj.should.be.a('object');
        obj.should.have.property('name').equal('grant');
        obj.should.have.property('age').equal(30);

        // array
        arr.should.be.ok;
        arr.should.be.a('array');
        arr.should.have.lengthOf(3);
        arr.should.have.lengthOf(3).that.include(2);
        arr.should.not.have.lengthOf(4).that.does.not.include(5);

        // bool
        bool.should.be.ok;
        bool.should.be.a('boolean');
        bool.should.be.true;
    })

    it('ASSERT assertion style', () => {
        // arrange
        const name: string = 'grant';
        const age: number = 30;
        const obj: Object = {
            name: 'grant',
            age: 30,
        };
        const arr: Array<number> = [1,2,3];
        const bool: boolean = true;

        // act

        // assert

        // string
        assert.isOk(name);
        assert.equal(name, 'grant');
        assert.typeOf(name, 'string');

        // number
        assert.isOk(age);
        assert.equal(age, 30);
        assert.typeOf(age, 'number');

        // object
        assert.isOk(obj);
        assert.typeOf(obj, 'object');
        assert.deepEqual(obj, {
            name: 'grant',
            age: 30,
        });

        // array
        assert.isOk(arr);
        assert.typeOf(arr, 'array');
        assert.deepEqual(arr, [1,2,3]);
        assert.include(arr, 2);

        // bool
        assert.isOk(bool);
        assert.typeOf(bool, 'boolean');
        assert.equal(bool, true);
    })
})