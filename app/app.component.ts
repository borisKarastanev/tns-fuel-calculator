import { Component } from "@angular/core";

import {Calculator} from './shared/calculator/calculator'

@Component({
    selector: "my-app",
    templateUrl: 'app.component.html'
})

export class AppComponent {
    calculator: Calculator;

    constructor() {
        this.calculator = new Calculator();
    }

    calculateL() {
        alert("You’re using: " + this.calculator.fuel);
    }
}
