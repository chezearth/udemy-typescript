console.log("It works!");
// string
var myName = 'Charles';
// number
var myAge = 51;
// myAge = '51';
// boolean
var hasHobbies = false;
// hasHobbies = 1;
// assign types
var myRealAge;
myRealAge = 51;
// myRealAge = '51';
// array
var hobbies = ['cooking', 'sports'];
hobbies = [100];
// hobbies = 100;
// tuples
var address = ['Sans Souci Road', 19];
// enums
var Colour;
(function (Colour) {
    Colour[Colour["grey"] = 0] = "grey";
    Colour[Colour["green"] = 100] = "green";
    Colour[Colour["blue"] = 2] = "blue"; // 2
})(Colour || (Colour = {}));
var myColour = Colour.green;
console.log(myColour);
myColour = Colour.blue;
console.log(myColour);
myColour = Colour.grey;
console.log(myColour);
// any
var car = 'BMW';
console.log(car);
car = { make: 'BMW', series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log('Hello!');
    // return myName;
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 10 /* 'Charles'*/));
// function types
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects
var userData = {
    name: 'Charles',
    age: 51
};
// userData = {
//   a: 'hello',
//   b: 20
// }
// complex object
var complex = {
    data: [100, 3.9, 10],
    output: function (all) {
        return all ? this.data : [0];
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 51;
myRealRealAge = '51';
// check types
var finalValue = 30;
if (typeof finalValue === 'number') {
    console.log('finalValue is a number');
}
// never
function neverReturns() {
    throw new Error('An Error!');
}
// nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
var canThisBeAny = null;
// canThisBeAny = 12;
