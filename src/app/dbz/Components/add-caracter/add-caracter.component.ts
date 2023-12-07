import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../Interfaces/character.interfaces';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-caracter.component.html',
  styleUrls: ['./add-caracter.component.css']
})
export class FormComponent {

  @Output()
  Pasar_Datos: EventEmitter <Character>=new EventEmitter();

  public character:Character={
    name:"",
    power:0
  };

  emitcharacter():void{

    const {name, power}=this.character

    if ( name=="" ) {
      window.alert("No se permiten valores nulos");
    } else {
      this.Pasar_Datos.emit(this.character)
      this.character={name:"", power:0}
    }
  }
}
