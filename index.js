var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// INHERITANCE
// ABSTRACT keyword will make sure class is abstract only to be used in subclasses
var Car = /** @class */ (function () {
    function Car(brand) {
        this.status = "The car is not moving";
        this.brand = brand;
    }
    Car.prototype.getBrand = function () {
        return this.brand;
    };
    Car.prototype.drive = function () {
        return this.status;
    };
    return Car;
}());
// COMPOSITION
var Engine = /** @class */ (function () {
    function Engine(type, horsepower) {
        this.type = type;
        this.horsepower = horsepower;
    } // the parameters of a constructor can also be used as a property of that class which is mutable as well
    Engine.prototype.getSpecs = function () {
        return "".concat(this.type, " - ").concat(this.horsepower, "HP");
    };
    return Engine;
}());
// ENCAPSULATION ALSO ABSTRACTION IS IN THIS EXAMPLE
var Supra = /** @class */ (function (_super) {
    __extends(Supra, _super);
    function Supra() {
        var _this = _super.call(this, "toyota") || this;
        _this.name = "supra"; // can be accessed outside class and mutable as well inside and out
        _this.engine = "2jz"; // read-only not mutable
        _this.speed = 0; // can't be accessed out side class and mutable in class as well
        // this.getname;
        // this.getEngine;
        // console.log(this.getBrand()) // output: toyota
        _this.engineDetails = new Engine("2JZ-GTE", 320); // composition
        return _this;
    }
    Supra.prototype.getname = function () {
        // this.name = "supra GOAT";
        return this.name;
    };
    Supra.prototype.getEngine = function () {
        // this.engine = ""; // this won't be allowed due to read only property
        return this.engine;
    };
    Supra.prototype.getFullInfo = function () {
        return "".concat(this.getBrand(), " ").concat(this.getname(), " with engine ").concat(this.getEngine());
    };
    Supra.prototype.updateStatus = function () {
        this.status = "The 2Jz is roaring 🔥";
    };
    // method overriding
    Supra.prototype.drive = function () {
        return "The 2Jz is roaring";
    };
    Object.defineProperty(Supra.prototype, "Speed", {
        get: function () {
            return this.speed;
        },
        set: function (value) {
            this.speed = value;
        },
        enumerable: false,
        configurable: true
    });
    Supra.prototype.area = function () {
        return 4545;
    };
    return Supra;
}(Car));
var car = new Supra();
console.log(car.engineDetails);
// console.log(car.drive()); // with method overriding output => The car is not moving
// console.log(car.drive()); // with method overriding output => The 2Jz is roaring
// const P_Car = new Car(); // Cannot create an instance of an abstract class.
// car.updateStatus();
// car.Speed = 40; // using setter value is updated
// console.log(car.Speed);
// console.log(car.brand); // this also wont work due to protected property only work in class and subclass or children
// console.log(car); // constructor function name or class name -> Supra, instance’s enumerable properties, shown as an object -> { name: 'supra', engine: '2jz' }
// console.log(car.getname()); // supra GOAT
// console.log(car.getEngine()); // wont work due to private property
