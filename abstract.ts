abstract class Vehicle {
  abstract wheels: number;

  start(): void {
    console.log("brummmm");
  }
}

class Car extends Vehicle {
  wheels: number = 4;
}

const brio = new Car();
console.log(brio.wheels);
brio.start();
