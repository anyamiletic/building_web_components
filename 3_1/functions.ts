function log2(x: number): number {
    return Math.log(x)/Math.log(2);
}

//defining and calling a function:
(function kvadrat(x: number): number{
  return x*x;
})(5);

// anonymus functions
// var halfRoot = function(x) {
//   return Math.sqrt(x)/2;
// }
let halfRoot = (x) => { return Math.sqrt(x)/2; };
// halfRoot is of a function type

// optional parameters:
let procesData = (x: number, y?: number) => {};

//default parameters:
let processData = (x: number, y=9) => {};

//unknown number of parameters:
let proccessData = (...nums: number[]) => {}; //nums is an array called a rest parameter

//functions as parameters
function ex(a:number, b:number,
  func: (x:number, y:number) => number): number {
    return func(a,b);
  }

// closures
let func: () =>   number = (
    function(): ()=> number{
      let count = 0;
      let increment = function(): number {
        count += 1;
        return count;
      }

      return increment;
    }
  ());

// generic types
//let middle: (arr: Array<T>) => T;
