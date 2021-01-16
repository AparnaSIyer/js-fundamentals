const friends = ['Kajal', 'Ruchi', 'Neha', 'Shelly', 'Rajiv', 'Mrudang', 'Mayyur', 'Piyu Di'];

//trying to modify a const variable will result in error

// const friends = ['Kajal'];

const lst = [1, 2, 3, 4, 5];
//block scoping with let
//var in for loop will not be block scoped and it will be available globally in contrast to let

for (let i = 0; i < lst.length; i++) {
    console.log(i);
}

//string concatenation with back ticks
const message = 'You do or do not, there is no try';

console.log(`Today's motivation ---> ${message}`);

//Object literals

function getBook(title, author) {
    return {
        title,
        author
    };
}

let book = getBook('Origin', 'Dan Brown');
console.log(book);

//Object deconstruction

const myDetails = {
    name: 'Favorite books',
    list: ['Inferno', 'Hungry Tide']
};

const { name, list } = myDetails;

console.log(name, list);

// Default parameters

const introMe = (name = 'Human', hobbies = ['Surviving']) => {
    console.log(`My name is ${name} and my hobbies is/are ${hobbies}.`);
};

introMe('Aparna', ['Reading', 'Eating yummy food', 'Drawing', 'Cleaning', 'Swimming']);
introMe();

// Array function

//forEach
const emotionsList = ['Happy', 'Sad', 'Fearful', 'Bad', 'Angry', 'Disgusted'];
emotionsList.forEach((feeling) => {
    console.log(`I am ${feeling}.`);
});

//Map

const newEmotionsList = emotionsList.map((feeling) => {
    return feeling + " and it's okay";
});

newEmotionsList.forEach((feeling) => {
    console.log(`I am ${feeling}.`);
});

//Filter

const h = emotionsList.filter((feeling) => feeling === 'Happy');
console.log(h);

//Constructor function

class myFavBookList {
    constructor(books) {
        this.books = books;
    }

    bookList() {
        console.log(this.books);
    }
}
class myFavAuthors extends myFavBookList {
    constructor(books, authors) {
        super(books);
        this.authors = authors;
    }
}
const aparnaList = new myFavAuthors(['1984', 'To Kill a Mockingbird', 'The Book Thief'], ['George Orwell', 'Harper Lee', 'Markus Zusak']);

console.log(aparnaList);

const bookListUserWise = {
    aparna: {
        books: ['1984', 'To Kill a Mockingbird', 'The Book Thief'],
        author: ['Dan Brown', 'Jerry Pinto', 'Agatha Christie', 'Richard Dawkings']
    },
    rajiv: {
        books: ['Shiva Trilogy', 'Death to Deathlesness'],
        author: ['Amish Tripathi', 'Osho']
    }
};

// const getUsersAndBooks = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(bookListUserWise);
//     }, 5000);
// });

// getUsersAndBooks.then((data) => console.log(data.aparna));

function between(string, start, end) {
    var startAt = string.indexOf(start) + start.length;
    var endAt = string.indexOf(end, startAt);
    return string.slice(startAt, endAt);
}

console.log(between('Your mother!', '{-', '-}'));

let characters = ['Aragorn', 'Bilbo', 'Samwise', 'Frodo', 'Gandalf', 'Sauron'];

let log = console.log;
function* genny() {
    yield characters[0];
    yield characters[1];
    return;
    yield characters[2];
    yield characters[3];
    yield characters[4];
    yield characters[5];
}

let iter = genny();
log(iter.next());
log(iter.next());
log(iter.next());

//creating an object iterator

// enumerable

characters.elf = 'Legolas';

Object.defineProperty(characters, 'ent', { value: 'treebeard', enumerable: true });
log(characters.elf);
//difference between for of and for in loop(enumerable vs iterable)

//for in loop goes over the enumerable properties of an array
//whereas a for of loop goes over the value of the properties

//Now we'll create and object with arrays within
let middleEarth = {
    towns: ['Hobbiton', 'Rivendell', 'Shire', 'Rohan'],
    races: ['Hobbits', 'Elves', 'Ents', 'Dwarves', 'Trolls', 'Orcs']
};

middleEarth.creator = 'J.R.R Tolkein';

//Now I will use the Object.defineProperty to define a property on the middle earth object
//value,enumerable are called property descriptors
Object.defineProperty(middleEarth, 'age', { value: '3rd', enumerable: true });
log('-----------------------of--------------------------');
for (p of middleEarth.towns) {
    log(p);
}

for (p of middleEarth.creator) {
    log(p);
}
log('-----------------------in--------------------------');
for (p in middleEarth) {
    log(p);
}

let myArray = [1, 2, 3, 4, 5, 6, 7];
let iterator = myArray[Symbol.iterator]();

console.log(iterator.next());
log('-----------------------------------------------------');
//Custom iterator
let range = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },
    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};

for (let num of range) {
    log(num);
}

log(range);
//Calling an iterator explicitly
let str = 'Aparna';
let customIterator = str[Symbol.iterator]();

while (true) {
    let result = customIterator.next();
    if (result.done) break;
    log(result);
}
