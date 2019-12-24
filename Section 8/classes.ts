class Vehicle {
  constructor(public color: string, public make: string) {
  }

  public drive(): void {
    console.log('Chugga Chugga');
  }

  protected honk(): void {
    console.log('Honk Honk');
  }

  public summary(): void {
      console.log(`Color: ${this.color} and Make: ${this.make}`)
  }
}

const vehicle = new Vehicle('orange', 'honda');

class Car extends Vehicle {
  drive(): void {
    console.log('vroom vroom');
  }

  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car('blue', 'mazda');

car.startDriving();
car.summary()
