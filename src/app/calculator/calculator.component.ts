import { Component, OnInit } from "@angular/core";
import { ZipOperator } from 'rxjs/internal/observable/zip';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css"]
})
export class CalculatorComponent implements OnInit {
  currDisplay: string;
  result: number;
  match: string[];
  arr: string[];

  constructor() { }

  ngOnInit() {
    this.currDisplay = "0";
    this.result = 0;
    this.match = ["+", "-", "*", "/"];
  }

  display(value: string) {
    this.arr = [...this.currDisplay];

    if(this.arr.length > 8){
      return alert("max length");
    } else {
      this.currDisplay[0] === "0"
      ? (this.currDisplay = value)
      : (this.currDisplay = this.currDisplay += value);

    if(this.match.includes(this.arr.pop()) && this.match.includes(this.arr.pop())){
      this.currDisplay = this.currDisplay.substring(0, [...this.currDisplay].length - 1);
    }
    }
  }

  calculator(){
    if(this.match.includes([...this.currDisplay].pop())){
      return alert(">:( chưa xong ai cho tính hứ ?");
    }
    this.currDisplay = eval(this.currDisplay);
    this.arr = [...this.currDisplay];
  }

 
  reset() {
    this.currDisplay = "0";
    this.result = 0;
  }
}
