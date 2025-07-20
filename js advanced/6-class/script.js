'use strict'

class Car {
    #brand;
    #model;
    #mileage;

    constructor(carBrand, carModel, carMileage) {
        this.#brand = carBrand;
        this.#model = carModel;
        this.#mileage = carMileage;
    }

    get mileage() {
        return this.#mileage;
    }

    set mileage(newMileage) {
        this.#mileage = newMileage;
    }

    info(){
        return `Марка: ${this.#brand}, Модель: ${this.#model}, Пробег: ${this.#mileage} км`;
    }
}

const car = new Car('Lada', 'Granta', 600000000);
console.log(car.mileage);
console.log(car.mileage = 600000001);
console.log(car.info());