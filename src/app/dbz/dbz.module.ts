import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './Pages/Main-Page.Component';
import { ListComponent } from './Components/list/list.component';
import { FormComponent } from './Components/add-caracter/add-caracter.component';



@NgModule({
  declarations: [
  MainPageComponent,
  ListComponent,
  FormComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
