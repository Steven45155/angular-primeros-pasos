import { Component, OnInit, NgModule } from '@angular/core';
import { DbzService } from '../Services/dbz.service';
import { Character } from '../Interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './Main-Page.Component.html'
})

export class MainPageComponent {

  constructor ( private inyeccion:DbzService  ){
  }
  get characters(): Character[] {
    return [...this.inyeccion.Characters];
  }

  OnDeleteCharacters( Id:string ):void {
    this.inyeccion.DeleteCharacterById( Id )
  }

  Nuevo( Datos:Character ){
    this.inyeccion.Nuevo( Datos )
  }
}
