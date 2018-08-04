// overview of Typescript data types
// type declaration is optional but convenient for type-checking

//basic syntax:   var name: type [= value];
var x: number;
// x = "Hello" produces an error

// variable declarations can start with var (JavaScript), let or const
// var - function scope
// let,const - block scope

//boolean variables
const tacno = true;
//this throws and error! bug-- var y: boolean = 5 === 6;
//5 and 6 are literal types 5 and 6, not number type
const y = <number>5 === <number>6;
console.log("Hello world!");

// numbers
let a: number = 5;
let pi: number = 3.14;
let avogardo: number = 6.022e-23;
//Number object
let b = Number.NaN;
let inf: number = Number.POSITIVE_INFINITY;

var c = Math.sin(Math.PI);
console.log(c.toString());

//strings baby
var niska: string = "The big brown fox";
//koriscenje regExp
var matches = niska.match(/[A-Z][a-z]+/);

//enum type
