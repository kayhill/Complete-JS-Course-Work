
// Lecture: let and const
/* var is function scoped;
    let and const are block scoped (wrapped in curly braces -- for, if, while, etc)
    -- temporal dead zone: can not access variables before they are declared
*/
/*
//ES5
function driversID(passedTest) {
    if (passedTest) {
        var firstName = 'John';
        var dob = 1999;
    }
    console.log(firstName +' was born in '+ dob);
}
driversID(true);

//ES6
function driversID(passedTest) {

    let firstName;
    const dob = 1999;

    if (passedTest) {
        firstName = 'John';
        console.log(firstName +' was born in '+ dob);
    }
    
}
driversID(true);
*/

////////////////////////////////////
// Lecture: Blocks and IIFEs
/* 
    put inside block { } for data privacy

*/
/*
// ES5 -- IIFE
(function() {
    var c = 3;
})();

// ES6 -- block
{
    const a = 1;
    let b = 2;
}
*/

////////////////////////////////////
// Lecture: Arrow Functions =>
/*
//ES5 .method(call back function(argument) { return statement})
var ages5 = years.map(function(el) {
    return 2020 - el;
});

//ES6 .method(argument => return statement)

// 1 argument, 1 line of code
let ages6 = years.map(el => 2020 - el);

// 2 arguments, 1 line of code
ages6 = years.map((el, index) => `Age ${index + 1} is ${2020 - el}`);



// 2 arguments, 2 lines of code
ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age ${index + 1} is ${age}`
})
*/
/*

//ES5 -- use work around to call 'this' bc regular function call points to global window object, only method call points to object
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
box5.clickMe();


//ES6 - arrow functions uses lexical this -- surrounding 'this' keyword, not global object
const box6 = {
    color: 'blue',
    position: 2,
    clickMe: function() {

        document.querySelector('.blue').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box6.clickMe();
*/

////////////////////// 
//Lexical 'This' Variable
//ES5
/*
function Person(name) {
    this.name = name;
}

var friends = ['Bob', 'Jane', 'Mark'];
var john = new Person('John');

Person.prototype.myFriends5 = function(friends) {
    
    var arr = friends.map(function(cur){
        return this.name + ' is friends with ' + cur;
    }.bind(this));

    console.log(arr);
};

john.myFriends5(friends);

//ES6
function Person(name) {
    this.name = name;
}

Person.prototype.myFriends6 = function(friends) {
    
    var arr = friends.map(cur =>
        `${this.name} is friends with ${cur}`
    );

    console.log(arr);
};

new Person('Mike').myFriends6(friends);
*/

//////////////////////////////////////
// Lecture: Destructuring
/*
// ES5
var john = ['John', 26];
var name5 = john[0];
var age5 = john[1];

// ES6

let ok = ['John', 26]
const [name6, age6] = ok
console.log(name6, age6);

let nope = {
    firstName: 'Bob',
    age: 25
};

const {firstName: a, age: b} = nope;
console.log(a, b);
*/
/*

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

let dob = 1987;
const [age2, retirement] = calcAgeRetirement(dob);

console.log(age2, retirement);

*/

/////////////////////////////////
// Lecture: Arrays

const boxes = document.querySelectorAll('.box');

// ES5 -- transform list to array
/*
var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});

for (var i = 0; i < boxesArr5.length; i++) {

    if(boxesArr5[i].className === 'box blue') {
        continue;
    } 
    boxesArr5[i].textContent = 'I changed to blue!';
    }
}
*/
/*
// ES6
const boxesArr6 = Array.from(boxes);

boxesArr6.forEach(cur => cur.style.backgroundColor = 'orange');

for (const box of boxesArr6) {
    if (box.className.includes('orange')) {
        continue;
    } 
    box.textContent = 'I changed to orange!';
}


//ES5 
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/


/////////////////////////////////
// Lecture: Spread Operator
/*

function addFourAges (a, b, c, d) {
    return a + b + c + d;
}
var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1)

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);

console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);


const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Anne'];

const bigFamily = [...familySmith, ...familyMiller, 'Lily'];

console.log(bigFamily);

const h = document.querySelector('h1');

const all = [h, ...boxes];

Array.from(all).forEach(el => el.style.color = 'navy');

*/
/////////////////////////////////
// Lecture: Maps
/*
const question = new Map();
question.set('question', 'What is the name of Disney\'s famous mouse?');

question.set(1, 'Minnie');
question.set(2, 'Goofy');
question.set(3, 'Mickey');
question.set('correct', 3);
question.set(true, 'Correct answer :)');
question.set(false, 'Nope, sorry :(');

*/

/////////////////////////////////
// Lecture: Classes
// make inheritance easier! 
/*
//ES5 - function constructors

var Person5 = function(name, yob, job) {
    this.name = name;
    this.yob = yob;
    this.job = job;
}

Person5.prototype.calcAge = function() {
    var age = new Date().getFullYear() - this.yob;
    console.log(age);
}

var john5 = new Person5('John', 1987, 'teacher');

john5.calcAge()


//ES6 - using class
class Person6 {
    constructor (name, yob, job){
        this.name = name;
        this.yob = yob;
        this.job = job;
    }

    calcAge() {
        var age = new Date().getFullYear() - this.yob;
        console.log(age);
    }

    static greeting() {
        console.log('Hey there!');
    }
}

const john6 = new Person6('John', 1987, 'teacher');

john6.calcAge(); 
Person6.greeting();

*/
/////////////////////////////////
// Lecture: Subclasses
//inheritance between classes!!!

//ES5 
//super class

var Person5 = function(name, yob, job) {
    this.name = name;
    this.yob = yob;
    this.job = job;
}

Person5.prototype.calcAge = function() {
    var age = new Date().getFullYear() - this.yob;
    console.log(age);
}
//sub class
var Athlete5 = function(name, yob, job, olympicGames, medals) {
    Person5.call(this, name, yob, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

// set sub class prototype to inherit superclass prototype
Athlete5.prototype = Object.create(Person5.prototype);

// add methods to subclass prototype
Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1991, 'swimmer', 3, 10);


// ES6
//super class
class Person6 {
    constructor (name, yob, job){
        this.name = name;
        this.yob = yob;
        this.job = job;
    }

    calcAge() {
        var age = new Date().getFullYear() - this.yob;
        console.log(age);
    }
}


// create subclass
class Athlete6 extends Person6 {
    constructor(name, yob, job, olympicGames, medals) {
        super(name, yob, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1987, 'swimmer', 3, 10);








