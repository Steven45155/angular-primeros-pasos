import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../Interfaces/character.interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  Emitir: EventEmitter <string>=new EventEmitter()

  @Input()
  public CharacterList:Character[]=[
    {
      name:"Trunks",
      power:10
    },
    {
      name:"Vegeta",
      power:8000
    }
  ];

  OnDeleteCharacter( index:number ):void{
    // TODO: Emitir el ID del personaje
    console.log( index );

  };

  OnDelete( id?:string ){
    if (id=="") {
      window.alert("el id no existe")
    } else {
      this.Emitir.emit( id )
      window.alert("el id es:"+id)
    }
  }
}
