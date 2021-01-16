// We can use a generator function for iteration by providing it as Symbol.iterator
log = console.log;
let range = {
    from: 1,
    to: 5,
    *[Symbol.iterator]() {
        for (let value = this.from; value <= this.to; value++) {
            yield value;
        }
    }
};

console.log([...range]); // 1,2,3,4,5
log('-------------------------------------------------------------------');
function* gen() {
    try {
        let result1 = yield '2+2=?';
        log(result1);
    } catch (e) {
        log(e);
    }
    let result2 = yield '8+2=?';
    log(result2);
    let result3 = yield '10+2=?';
    log(result3);
}

let generator = gen();

console.log(generator.next().value);
generator.throw('We do not do that here');
console.log(generator.next(10));
console.log(generator.next(12));

log('-------------------------------------------------------------------');
let user = { name: 'John', age: 30 };
let desc = Object.getOwnPropertyDescriptor(Math, 'PI');
log(desc);

log('-------------------------------------------------------------------');
//Prototype

let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal;
log(rabbit.eats);
