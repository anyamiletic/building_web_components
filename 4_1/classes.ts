//TS is an object-oriented language - it supports
// classes, inheritance, polymorphism and encapsulation

class Car {
  //properties
  make: String;
  model: String;
  engineType: String;
  year: number;

  park() {

  }
  drive() {

  }
}

let myCar = new Car();

// inheritance
class SportsCar extends Car {
  maxSpeed: number;
}

let AudiTT = new SportsCar;
AudiTT.year = 2016;
AudiTT.maxSpeed = 300;

// polymorphism
let myNewCar: Car;
myNewCar = new SportsCar();

// constructors
class CarWithConstructor {
  //properties
  make: String;
  model: String;
  engineType: String;
  year: number;

  constructor(make, model, engineType, year) {
    this.make = make;
    this.model = model;
    this.engineType = engineType;
    this.year = year;
  }

  park() {

  }
  drive() {

  }
}

//calling:
let HondaCivic = new CarWithConstructor("Honda", "Civic", "Dizel", 1998);

class CarWithAccessModifiers {
  //properties
  constructor(public make: String, public model: String,
    public engineType: String, public year: number) {
    this.make = make;
    this.model = model;
    this.engineType = engineType;
    this.year = year;
  }

}

// overriding
class A {
  public addConstant(num: number): number {
    return num + 3;
  }
}

class B extends A {
  public addConstant(num: number): number {
    return num + 5;
  }
}

//using the this keyword
class Adder {
  constructor(private x: number, private y: number) {
    this.x = x;
    this.y = y;
  }

  public add(): number {
    return this.x + this.y;
  }
}

//recursion?
let fib = (x) => {
  if (x === 1 || x === 0) {
    return x;
  }
  else {
    return this(x - 1) + this(x - 2);
  }
}

// using the super keyword
class A2 {
  public addConstant(num: number): number {
    return num + 3;
  }
}

class B2 extends A {
  public addConstant(num: number): number {
    return num + 5;
  }

  public sumTwo(): number {
    return this.addConstant(4) + super.addConstant(4);
  }
}

// static members
// static methods and properties are accessed through the CLass,
// not the instance
class Circle {
  private static pi = 3.14159;
  static totalArea = 0.0;
  area: number;

  constructor(radius: number) {
    this.area = radius * radius * Circle.pi;
    Circle.totalArea += this.area;
  }

  //static method:
  static computeArea(radius: number): number {
    return radius * radius * Circle.pi;
  }
}

// getters and setters
class A3 {
  private num: number;
  constructor() {
    this.num = 5;
  }

  get foo(): number {
    return this.num;
  }
  set foo(f: number) {
    this.num = f;
  }
}

let objA = new A3();
console.log(objA.foo); // 5
objA.foo = 4; //sets num to 4
