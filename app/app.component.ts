import {Component, ElementRef, ViewChild, OnInit} from "@angular/core";
import {Calculator} from './shared/calculator/calculator';
import { Page } from "ui/page";

@Component({
    selector: "my-app",
    templateUrl: 'app.component.html',
    styleUrls: ['app.css']
})

export class AppComponent implements OnInit{
    ngOnInit() {
        this.page.actionBarHidden = true;
    }

    calculator: Calculator;
    @ViewChild('resultField') resultField: ElementRef;

    constructor(private page: Page) {
        this.calculator = new Calculator();
    }

    calculateL() {
        let usedFuel = this.calculator.fuel;
        let distance = this.calculator.distance;
        let result = (usedFuel / distance * 100).toFixed(1);

        this.calculator.result = parseFloat(result);
    }

    clearResult() {
        this.calculator.result = null;
        this.calculator.fuel = null;
        this.calculator.distance = null;
    }

}
