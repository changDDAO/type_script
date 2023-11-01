"use strict";
class Car {
    constructor() {
        this.mileage = 0;
        this.price = 1000;
        this.color = "white";
    }
    drive() {
        return "driving";
    }
    stop() {
        return "stopping";
    }
}
class Ford extends Car {
}
;
const myFordCar = new Ford();
console.log(myFordCar.drive());
