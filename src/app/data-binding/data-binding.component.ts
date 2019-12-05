import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  numberInput: number;

  constructor() { }

  ngOnInit() {
  }

  getNumber(number1: string) {
    this.numberInput =  parseFloat(number1) + 200;
  }

}
