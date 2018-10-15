import { Car } from "../src/classes/car.js";
import { Drone } from "../src/classes/drone.js";
import { fleet } from "./fleet-data";
import { FleetDataService } from "./services/fleet-data-service";
import "../node_modules/jquery/dist/jquery";
import "../node_modules/material-design-lite";
import $ from "jquery";
import { Button } from "./ui/button.js";
import { Image } from "./ui/image";
import { TitleBar } from "./ui/title-bar";

// let dataService = new FleetDataService();
// dataService.loadData(fleet);
// console.log(dataService.cars);


// let car = dataService.getCarByLicence('LKM346');
// console.log(car);

// //sorting
// let cars = dataService.getCarsSortedByLicence();
// for (let car of cars) {
//     console.log(car.licence);
// }

// for (let e of dataService.errors) {
//     console.log(e.message);
// }

// //filtering

// let cars2 = dataService.filterCarsByMake('o');
// for (let car of cars2) {
//     console.log(car.make);
// }

let tb = new TitleBar('Our Application');
tb.addLink('Home','');
tb.addLink('Cars','');
tb.addLink('Drones','');
tb.addLink('Map','');
tb.appendToElement($('body'));



let b = new Button('click me');
b.appendToElement($('body'));

let i = new Image('../images/drone.jpg');
i.appendToElement($('body'));

