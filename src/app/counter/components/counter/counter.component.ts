
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>mi counter es:{{counter}}</h3>
  <button (click)="incrementar(+1)">+1</button>
  <button (click)="reset()">reset</button>
  <button (click)="incrementar(-1)">-1</button>
  <button (click)="incrementar(counter)">x2</button>
  <br>
  `
})

export class countercomponent {
  counter=10;

  incrementar(value:number):void{
    this.counter+=value;
  };

  reset():void{
    this.counter=10;
  }
}
