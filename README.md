# Object-Oriented Programming (OOP) Concepts in TypeScript 🚗

A comprehensive demonstration of core Object-Oriented Programming principles using a Car/Supra example in TypeScript.

## 📚 Concepts Demonstrated

### 1. **Inheritance**
The `Supra` class extends the `Car` class, inheriting its properties and methods.

```typescript
class Supra extends Car {
  // Inherits brand, status, getBrand(), and drive() from Car
}
```

### 2. **Abstraction**
The `Car` class is marked as `abstract`, meaning it cannot be instantiated directly - it serves as a blueprint for other classes.

```typescript
abstract class Car {
  // Cannot create: new Car() ❌
  // Must create: new Supra() ✅
}
```

### 3. **Encapsulation**
Different access modifiers control how properties and methods can be accessed:

- **`public`** - Accessible everywhere
- **`private`** - Only accessible within the same class
- **`protected`** - Accessible within the class and its subclasses
- **`readonly`** - Can only be set during initialization

```typescript
class Supra extends Car {
  public name: string = "supra";           // ✅ Accessible everywhere
  private readonly engine: string = "2jz"; // ❌ Only inside Supra class
  // protected brand inherited from Car     // ✅ Available in Supra, not outside
}
```

### 4. **Polymorphism**
The `area()` method is overridden in the `Supra` class, providing different behavior than the parent class.

```typescript
// Parent class
abstract class Car {
  area(): number {
    return 0;  // Default implementation
  }
}

// Child class
class Supra extends Car {
  area(): number {
    return 4545;  // Overridden implementation
  }
}
```

### 5. **Getters and Setters**
The `Speed` property uses getter and setter methods for controlled access.

```typescript
class Supra extends Car {
  private speed: number = 0;
  
  set Speed(value: number) {
    this.speed = value;
  }
  
  get Speed() {
    return this.speed;
  }
}

// Usage:
const car = new Supra();
car.Speed = 40;  // Uses setter
console.log(car.Speed);  // Uses getter
```

### 6. **Constructor Chaining**
The child class calls the parent constructor using `super()`.

```typescript
class Supra extends Car {
  constructor() {
    super("toyota");  // Calls parent constructor
  }
}
```

## 🔧 Code Structure

### Abstract Car Class
- **Properties**: `brand` (protected), `status` (protected)
- **Methods**: `getBrand()`, `drive()`, `area()`
- **Purpose**: Serves as a base template for all car types

### Supra Class (extends Car)
- **Properties**: `name` (public), `engine` (private, readonly), `speed` (private)
- **Methods**: `getname()`, `getEngine()` (private), `getFullInfo()`, `updateStatus()`
- **Special**: Implements getter/setter for Speed property

### Commented Interface
The code includes a commented `Drivable` interface that could be implemented to ensure classes have specific methods.

## 🚀 How to Use

```typescript
// Create a Supra instance
const car = new Supra();

// Access public methods
console.log(car.getBrand());     // "toyota"
console.log(car.getname());      // "supra"
console.log(car.getFullInfo());  // "toyota supra with engine 2jz"

// Use getter/setter
car.Speed = 100;
console.log(car.Speed);          // 100

// Update status
car.updateStatus();
console.log(car.drive());        // "The 2Jz is roaring 🔥"

// Polymorphism in action
console.log(car.area());         // 4545
```

## ❌ What Won't Work

```typescript
// These will cause compilation errors:

const car = new Car();           // ❌ Cannot instantiate abstract class
console.log(car.brand);          // ❌ Protected property not accessible
console.log(car.getEngine());    // ❌ Private method not accessible
car.engine = "3jz";              // ❌ Readonly property cannot be modified
```

## 🎯 Learning Outcomes

After studying this code, you'll understand:

1. How to create class hierarchies using inheritance
2. When and why to use abstract classes
3. How access modifiers control code accessibility
4. The power of method overriding (polymorphism)
5. How to implement controlled property access with getters/setters
6. The importance of constructor chaining in inheritance
7. Interface implementation
8. Static methods and properties
9. More polymorphic examples
10. Composition patterns

---

*This example demonstrates fundamental OOP concepts that form the foundation of scalable, maintainable software design.*
