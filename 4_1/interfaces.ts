interface SoccerPlayer {
  jerseyNum: number;

  passBall();
  receiveBall();
  blockOpponent();
}

interface CenterForward extends SoccerPlayer {
  shootOnGoal();
  freeThrow();
}

class Ibrahimovic implements SoccerPlayer {
  jerseyNum = 31;

  passBall() {
    throw new Error("Method not implemented.");
  }
  receiveBall() {
    throw new Error("Method not implemented.");
  }
  blockOpponent() {
    throw new Error("Method not implemented.");
  }
}

// function interfaces
interface funcDef {
  (arg1: number, arg2: boolean): number;
}
//these interfaces cant be implemented by classes
let newFunc: funcDef;
newFunc = function (num: number, invert: boolean) {
  return (invert) ? (num * -1) : num;
}

// array interfaces
interface arrayDef {
  [i: number]: String;  //i can be number or string
}

let StringArrray: arrayDef;
StringArrray = ["hello", "string", "array"];

// mixins:
// first class to be mixed in
class addConstant {
  public num1: number;

  public addNum(n: number): number {
    return n + this.num1;
  }
}

// second class to be mixed in
class subtractConstant {
  public num2: number;

  public subtractNum(n: number): number {
    return n - this.num2;
  }
}

// class to receive mixins
class addSubtract implements addConstant, subtractConstant {
  public num2 = 7;
  public subtractNum: (n: number) => number;
  public num1 = 5;
  public addNum: (n: number) => number;

  public addSubtract(x: number) {
    return this.addNum(x) + this.subtractNum(x);
  }
}

// mix the classes
applyMixins(addSubtract, [addConstant, subtractConstant]);
function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
        derivedCtor.prototype[name] = baseCtor.prototype[name];
      });
    });
}

let test = new addSubtract();
let ans = test.addSubtract(9); // (9+5) + (9-7)
