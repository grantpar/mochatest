import { expect } from "chai";
import nock from "nock";
import { Calculator } from "../src/calculator"

describe('API Test', () => { 
    it('should make a GET request', async () => {
        const calc = new Calculator();
        const res = await calc.getUser();

        const mockedUserResponse = { id: 1, name: 'nate'};
        nock('https://jsonplaceholder.typicode.com').get('/users/1').reply(200, mockedUserResponse)

        expect(res.status).to.equal(200);
        expect(res.data.id).to.equal(1);
    })

    it('should make a POST request', async () => {
        const calc = new Calculator();

        const userPayload = `{
            "name": "Ninja Graham",
            "username": "Mission",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        }`;
    
        const mockedUserResponse = {
            "name": "Ninja Graham",
            "username": "Mission",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            },
            "id": 11
        };
        nock('https://jsonplaceholder.typicode.com').post('/users').reply(201, mockedUserResponse)

        const res = await calc.saveUser(userPayload);
        expect(res.status).to.equal(201);
        expect(res.data.id).to.equal(11);
    })

    after(() => {
        nock.cleanAll();
    })
})
