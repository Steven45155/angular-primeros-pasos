import { NgModule } from "@angular/core";
import { countercomponent } from "./counter/counter.component";



@NgModule({
  declarations:[
    countercomponent
  ],
  exports:[
    countercomponent
  ]
})
export class CounterModule{

}
