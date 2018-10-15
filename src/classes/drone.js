import { Vehicle } from "./vehicle";

export class Drone extends Vehicle {
    constructor(licence, model, latLong) {
        super(licence, model, latLong);
        this.airtimeHours = null;
        this.base = null;
    }
}