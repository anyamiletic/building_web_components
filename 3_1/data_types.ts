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
//bug-- var y: boolean = 5 === 6; this throws and error!
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
//syntax: enum name {value1, value2, ...}
enum Strane_sveta {NORTH, EAST, SOUTH, WEST};
//assigning variables to enum values:
let strana: Strane_sveta = Strane_sveta.EAST;

//arrays
//syntax:
//let array_name: element_type[];
//let array_name: Array<element_type>;
const brojevi: number[] = [1,2,3,4];
const nums: Array<number> = [1,2,3];
console.log(brojevi.length);
console.log(brojevi[2]);

//array destructuring:
let f: number;
let g: number;
[f,g] = brojevi; //f=1, g=2

//array iterators
//classics - for, while, if
for(let i in brojevi){
  console.log(brojevi[i]);
}
for(let i of brojevi) {
  console.log(i); //takes on the actual value
}

//tuples
const tapl: [boolean, number] = [true, 8];
//access with tapl[0], tapl[1]

//Object/object
let person: Object = {
  name: "Mark",
  surname: "Marquez"
};
JSON.stringify(person); //converts an object into a json-like string
//JSON.parse(string s) converts string to Object

//object (small o!) is a container for all non-primitive types -
// arrays, tuples, Objects and user-defined types

//any and undefined
//undefined is not used in code!
//any is not recommended to be used - it tells the compiler not to worry about
// the type. Useful when dealung with third party JS code

//void and null
// void means no data - return type for a function that doesn't
// return data
// a variable initialized to null type can only contain null
//but vars of any type can have value of null

//never
//type assigned to vars that will never be executed, or a return
//  type of a function that never returns



// when initializing a variables value there is no need
// to state its type explicitly

let z = 3; //TS determines that x is of type number - type inference

//typeof var returns string representation of type
console.log(typeof z);  //returns "number"
let new_number: typeof z;

//type aliasing:
// type new_type = existing_type

//union types:
// var something: string | number 
