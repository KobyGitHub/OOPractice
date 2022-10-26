class Vehicle {
    constructor (make, model, year){
        this.make = make
        this.model = model
        this.year = year
    }

    honk(){
        return "Beep"
    }

    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year} `
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);

class Car extends Vehicle {
    constructor(){
        super()
        this.numWheels = 4

    }
    
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);

class Motorcycle extends Vehicle {
    constructor(){
        super()
        this.numWheels = 2
    }

    revEngine(){
        return "VROOM"
    }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

class Garage {
    constructor (capacity){
        if (typeof(capacity) !== 'number' ){
            throw new Error ("Capacity must be a number")
        }
        this.vehicles = []
        this.capacity = capacity
    }

    add(newV){

        if (this.vehicles.length >= this.capacity){
            return "Sorry, we're full."
        } else if (!(newV instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
          } else {
            this.vehicles.push(newV)
            return "New Vehicle added!"
        }
    }
}

let garage = new Garage(2);




