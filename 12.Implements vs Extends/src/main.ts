class Car{
    mileage = 0;
    price = 1000;
    color = "white";

    drive(): string{
        return "driving";
    }
    stop(): string{
        return "stopping";
    }
}
class Ford extends Car{};

const myFordCar = new Ford();
console.log(myFordCar.drive());
