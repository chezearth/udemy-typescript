console.log("It works!");

// string
let myName: string = 'Charles';

// number
let myAge: number = 51;
// myAge = '51';

// boolean
let hasHobbies: boolean = false;
// hasHobbies = 1;

// assign types
let myRealAge: number;
myRealAge = 51;
// myRealAge = '51';

// array
let hobbies: any[] = ['cooking', 'sports'];
hobbies = [100];
// hobbies = 100;

// tuples
let address: [string, number] = ['Sans Souci Road', 19];

// enums
enum Colour {
  'grey', // 0
  'green' = 100, //100
  'blue' = 2 // 2
}
let myColour: Colour = Colour.green;
console.log(myColour);
myColour = Colour.blue;
console.log(myColour);
myColour = Colour.grey;
console.log(myColour);

// any
// let car: any = 'BMW';
// console.log(car);
// car = { make: 'BMW', series: 3 };
// console.log(car);

// functions
function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
  console.log('Hello!');
  // return myName;
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
console.log(multiply(2, 10 /* 'Charles'*/));

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));

// objects
let userData: { name: string; age: number } = {
  name: 'Charles',
  age: 51
};
// userData = {
//   a: 'hello',
//   b: 20
// }

// complex object
let complex: { data: number[], output: (all: boolean) => number[] } = {
  data: [100, 3.9, 10],
  output: function(all: boolean): number[] {
    return all ? this.data : [0];
  }
};

// type alias
type Complex = { data: number[], output: (all: boolean) => number[] };
let complex2: Complex = {
  data: [100, 3.99, 10],
  output: function(all: boolean) {
    return all ? this.data : null;
  }
};

// union types
let myRealRealAge: number | string = 51
myRealRealAge = '51';

// check types
let finalValue = 30;
if (typeof finalValue === 'number') {
  console.log('finalValue is a number');
}

// never
function neverReturns(): never {
  throw new Error('An Error!');
}

// nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
let canThisBeAny = null;
// canThisBeAny = 12;


function logConstructor(constructor: Function) {
  console.log(constructor());
}

@logConstructor
class MyClass {

  constructor() {
    return 'Hi, this is the class constructor!'
  }
}
