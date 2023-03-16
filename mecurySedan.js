//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    service() {
        if (this.mileage > 30000) {            
            this.scheduleService = true
            return this.scheduleService;                       
        }
    }

    start() {
        if (this.fuel > 0) {            
            console.log("engine started...!!!");
            return this.started = true
        } else {
            console.log("out of fuel.");
            return this.started = false;
        }
    }

    loadPassenger(x) {
        if (this.passenger < this.maxPassengers) {
            if ((x + this.passenger) <= this.maxPassengers) {
                this.passenger = x;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + "is not big enough");

            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }


}