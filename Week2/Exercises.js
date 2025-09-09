function greeter(myArray, counter) {
    let greetText = 'Hello ';

    for (let name of myArray) {
        console.log(greetText + name);
    }
}

greeter(['Randy Savage', 'Rix Flair', 'Hulk Hogan'], 3);

function capitalize(s) {
    let [first_letter, ...rest] = s;
    return first_letter.toUpperCase() + rest.join('');
}

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

const colors = ['red', 'green', 'blue'];
const capitalized_colors = colors.map((color) => capitalize(color));
console.log(capitalized_colors);

const values = [1, 60, 34, 30, 20, 5];
const filterLessThan20 = values.filter((value) => value < 20);
console.log(filterLessThan20);

const array = [1, 2, 3, 4];
let calculateSum = array.reduce((acc, currValue) => acc += currValue);
let calculateProduct = array.reduce((acc, currValue) => acc *= currValue);
console.log(calculateSum);
console.log(calculateProduct);

class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        console.log(`Model: ${this.model}\nYear: ${this.year}`);
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    info() {
        console.log(`${this.model} has a balance of $${this.balance}.00`)
    }
}

const car = new Car('Pontiac Firebird', 1976);
car.details();
const sedan = new Sedan('Volvo SD', 2018, 30000);
sedan.info();
