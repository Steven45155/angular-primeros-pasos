import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public NombresHeroes:string[]=["spiderman","airoman","Hulk","thor"];
  public Eliminar?:string="";
  public Steven:string="Steven"

  Eliminar_Ul():void{
    this.Eliminar=this.NombresHeroes.pop();
  }

  Eliminar_Pri(){
    this.Eliminar=this.NombresHeroes.shift()
  }
}
