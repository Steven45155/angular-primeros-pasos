import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public nombre:string="Airo-Man";
  public edad:number=45;

  get Airo():string {
    return this.nombre="Airo-Man".toUpperCase();
  };

  DatosAiro():string{
    return `${ this.nombre="Airo-Man".toUpperCase() } - ${ this.edad=45}`
  };

  DatosSpider():string{
    return `${ this.nombre="Spider-Man"} - ${this.edad=25}`
  };

}
