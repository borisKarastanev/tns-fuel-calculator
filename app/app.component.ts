import {Component, ElementRef, ViewChild} from "@angular/core";
import {Calculator} from './shared/calculator/calculator';

@Component({
    selector: "my-app",
    templateUrl: 'app.component.html',
    styleUrls: ['app.css']
})

export class AppComponent {
    calculator: Calculator;
    @ViewChild('resultField') resultField: ElementRef;

    constructor() {
        this.calculator = new Calculator();
    }

    calculateL() {
        let usedFuel = this.calculator.fuel;
        let distance = this.calculator.distance;
        let result = (usedFuel / distance * 100).toFixed(1);

        this.calculator.result = parseFloat(result);
    }

    clearResult() {
        this.calculator.result = 0;
    }

}
