class Vehicle {
    constructor(private color: string) {
    }
    protected honk(): void {
        console.log('beep')
    };
    protected getColor(): void {
        console.log(this.color)
    }
}

class Car extends Vehicle {
    constructor (public wheels: number, color: string) {
        super(color);
    }
    drive(): void {
        console.log('car driving')
    };

    getWheels(): void {
        console.log(this.wheels)
    }

    startDriving(): void {
        this.drive();
        this.honk();
        this.getColor();
        this.getWheels();
    }
}

const vehicle = new Vehicle('orange');
const car1 = new Car(4, 'orange');
car1.startDriving();
