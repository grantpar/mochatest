// export default to remove curly braces during importing
import axios from 'axios';

export class Calculator {
    add(a: number, b: number):number {
        return a + b;
    }

    subtract(a: number, b: number):number {
        return a - b;
    }

    multiply(a: number, b: number):number {
        return a * b;
    }

    divide(a: number, b: number):number {
        if (b === 0) {
            throw new Error('Cannot Divide by 0');
        }
        return a / b;
    }

    // spy, stub, mock
    randomNo():number {
        return Math.floor(Math.random() * 10 + 1)
    }

    addRandom(a: number, b: number):number {
        this.logMessage('logging add');
        const c = this.randomNo();
        return a + b + c;
    }

    logMessage(message:string) {
        console.log(message);
    }

    // asyncPromise
    asyncPromise() {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{ resolve(4) }, 1000);
        })
    }

    // REST API
    async getUser() {
        return await axios.get('https://jsonplaceholder.typicode.com/users/1');
    }

    async saveUser(userPayload:Object) {
        return await axios.post('https://jsonplaceholder.typicode.com/users', userPayload);
    }

    anonFxn = (a:number, b:number) => {
        return a + b;
    }
}