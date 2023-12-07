
import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";

import { Character } from '../Interfaces/character.interfaces';


@Injectable({providedIn: 'root'})

export class DbzService {

  public Characters:Character[]=[
    {
      id: uuid(),
      name:"Krillin",
      power:1000
    },
    {
      id: uuid(),
      name:"Goku",
      power:9500
    },
    {
      id: uuid(),
      name:"Vegeta",
      power:7500
    }
  ];

  Nuevo(Datos:Character):void{

    const NuevoPersonaje:Character ={
      id: uuid(),
      ...Datos
    }

    this.Characters.push(NuevoPersonaje);
    window.alert("Se ha creado el personaje")
  }

  // OnDeleteCharacter( Valor:number ){
  //   this.Characters.splice( Valor,1 )

  DeleteCharacterById( Valor:string ){
    this.Characters=this.Characters.filter( Character=>Character.id !==Valor )
  }

  constructor() { }

}
