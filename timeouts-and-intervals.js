// let myGreeting = setTimeout(function () {
//     alert('Hello Universe');
// }, 2000);

// other similar example but with variation
// let myGreeting1 = setTimeout(sayHi, 2000, 'Universe');

// function sayHi(who) {
//     alert(`Hello ${who}`);
// }

// console.log(myGreeting1);

const form = document.querySelector('form');

const name = document.getElementById('name');
const btnGreet = document.getElementById('greet');
const btnCancel = document.getElementById('cancel');

btnCancel.disabled = true;
function sayHi(who) {
    alert(`Hello ${who}`);
    btnCancel.disabled = true;
}

let myGreeting;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    btnCancel.disabled = false;
    myGreeting = setTimeout(sayHi, 5000, name.value);
});

btnCancel.addEventListener('click', () => {
    clearTimeout(myGreeting);
    console.log('Cancelled timeout');
    btnCancel.disabled = true;
});

// recursive timeouts
let i = 1;

setTimeout(function run() {
    console.log(i);
    i++;
    setTimeout(run, 0);
}, 0);
