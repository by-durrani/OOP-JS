// INHERITANCE
// ABSTRACT keyword will make sure class is abstract only to be used in subclasses
abstract class Car {
  protected brand: string;
  protected status: string = "The car is not moving";

  constructor(brand: string) {
    this.brand = brand;
  }

  getBrand() {
    return this.brand;
  }

  drive() {
    return this.status;
  }

  area(): number {
    return 0;
  }
}

// IMPLEMENTS TS keyword to make sure class have all these methods included
// interface Drivable {
//   topSpeed?: number;
//   getBrand: () => string;
//   drive: () => string;
//   getname: () => string;
//   getFullInfo: () => string;
//   updateStatus: () => void;
//   Speed: number;
//   area: () => number;
// }

// ENCAPSULATION ALSO ABSTRACTION IS IN THIS EXAMPLE
class Supra extends Car {
  public name: string = "supra";
  private readonly engine: string = "2jz";
  private speed: number = 0;
  constructor() {
    super("toyota");
    // this.getname;
    // this.getEngine;
    // console.log(this.getBrand()) // output: toyota
  }

  getname() {
    // this.name = "supra GOAT";
    return this.name;
  }

  private getEngine() {
    // this.engine = ""; // this won't be allowed due to read only property
    return this.engine;
  }

  getFullInfo() {
    return `${this.getBrand()} ${this.getname()} with engine ${this.getEngine()}`;
  }

  updateStatus() {
    this.status = "The 2Jz is roaring 🔥";
  }

  set Speed(value: number) {
    this.speed = value;
  }

  get Speed() {
    return this.speed;
  }

  area(): number {
    return 4545;
  }
}

const car = new Supra();
// console.log(car.area());

// const P_Car = new Car(); // Cannot create an instance of an abstract class.

// car.updateStatus();

// car.Speed = 40; // using setter value is updated

// console.log(car.Speed);
// console.log(car.brand); // this also wont work due to protected property only work in class and subclass or children

// console.log(car); // constructor function name or class name -> Supra, instance’s enumerable properties, shown as an object -> { name: 'supra', engine: '2jz' }
// console.log(car.getname()); // supra GOAT
// console.log(car.getEngine()); // wont work due to private property
