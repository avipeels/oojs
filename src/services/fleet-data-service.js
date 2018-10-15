import { Car } from "../classes/car";
import { Drone } from "../classes/drone";
import { DataError } from "../services/data-error";

export class FleetDataService {
    constructor() {
        this.cars = [];
        this.drones = [];
        this.errors = [];
    }
    getCarByLicence(licence) {
        return this.cars.find(function (car) {
            return car.licence === licence;
        })
    }
    getCarsSortedByLicence() {
        return this.cars.sort(function (car1, car2) {
            if (car1.licence > car2.licence) {
                return 1;
            }
            if (car2.licence > car1.licence) {
                return -1;
            }
            return 0;
        })
    }
    filterCarsByMake(filterString) {
        return this.cars.filter(car => car.make.indexOf(filterString) >= 0);
    }
    loadData(fleet) {
        for (let data of fleet) {
            switch (data.type) {
                case 'car':
                    if (this.validateCarData(data)) {
                        let car = this.loadCar(data);
                        this.cars.push(car);
                    }
                    else {
                        let e = new DataError('Invalid car data');
                        this.errors.push(e);
                    }
                    break;
                case 'drone':
                    let drone = this.loadDrone(data);
                    this.drones.push(drone);
                    break;
                default:
                    let e = new DataError('Invalid data type', data);
                    this.errors.push(e);
                    break;
            }
        }
    }

    loadCar(car) {
        try {
            let c = new Car(car.licence, car.model, car.latLong);
            c.miles = car.miles;
            c.make = car.make;
            return c;
        }
        catch (e) {
            this.errors.push(new DataError('error loading car', car));
        }
        return null;
    }

    loadDrone(drone) {
        let d = new Drone(drone.licence, drone.model, drone.latLong);
        d.airtimeHours = drone.airtimeHours;
        d.base = drone.base;
    }

    validateCarData(car) {
        let requiredProps = 'licence model latLong make model'.split(' ');
        let hasErrors = false;

        for (const field of requiredProps) {
            if (!car[field]) {
                let e = new DataError(`Invalid field ${field}`, car);
                this.errors.push(e);
                hasErrors = true;
            }
        }
        if (Number.isNaN(Number.parseFloat(car.miles))) {
            let e = new DataError(`Invalid mileage ${car.miles}`);
            this.errors.push(e);
            hasErrors = true;
        }
        return !hasErrors;
    }
}