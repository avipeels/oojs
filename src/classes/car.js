import { Vehicle } from "./vehicle";

export class Car extends Vehicle {
    constructor(licence, model, latLong) {
        super(licence, model, latLong);
        this.make = null;
        this.miles = null;
    }
}