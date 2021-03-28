// 1. sukurti klasę 'Vehicle', kuri turi 2 parametrus: wheelCount, speed(km/h),
// 2. sukurti metodą addSpeed kuris prideda prie esamo speed greičio 10km/h
// 3. sukurti metodą break kuris nuima nuo esamo greičio 5(km/h)
// 4. sukurti klases 'car' ir 'bicycle' kurios paveldi esamus 'vehile' metodus ir parametrus
// 5. 'car' pridėti metodą 'blink' kuris konsolėje atspausdina 'blink blink'
// 6. 'bicycle' pridėti metodą 'beep' kuris konsolėje atsapaudina 'beep beep'

class Vehicle {

    constructor(wheelCount, speed) {
        this.wheelCount = wheelCount;
        this.speed = speed;
    }

    addSpeed() {
        this.speed = this.speed + 10;
    }

    break() {
        this.speed = this.speed - 5;
    }
}

class Car extends Vehicle {

    constructor(wheelCount, speed) {
        super(wheelCount, speed);
    }

    blink() {
        console.log(`blink blink`);
    }
}

class Bicycle extends Vehicle {

    constructor(wheelCount, speed) {
        super(wheelCount, speed);
    }

    beep() {
        console.log(`beep beep`);
    }
}

const vechile = new Vehicle(10, 57);
vechile.addSpeed();
vechile.break();

const car = new Car(4, 300);
car.addSpeed();
car.break();
car.blink();

const bicycle = new Bicycle(2, 30);
bicycle.addSpeed();
bicycle.break();
bicycle.beep();
