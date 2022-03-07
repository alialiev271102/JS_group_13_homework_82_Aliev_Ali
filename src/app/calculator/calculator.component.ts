import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {addNumber, deleteNumber, getAnswer} from "../calculate.actions";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  calculate!: Observable<string>;
  arr = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '/', '0'];

  constructor(private store: Store<{calculate: string}>) {
    this.calculate = store.select('calculate');
  }

  addNumbers(num: string) {
    this.store.dispatch(addNumber({number: num}));
  }

  getAnswer() {
    this.store.dispatch(getAnswer());
  }

  deleteNumber() {
    this.store.dispatch(deleteNumber());
  }
}
