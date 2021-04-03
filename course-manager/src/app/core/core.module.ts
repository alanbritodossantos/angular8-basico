import { NgModule } from '@angular/core';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './component/error-404/error-404.component';

@NgModule({
  declarations:[
    NavBarComponent,
    Error404Component
  ],
  imports:[
    RouterModule.forChild([
    {
      path:'**', component: Error404Component /*o '**' signigica quando não encontrar uma rota(url)*/
    }

    ])
  ],
  exports:[
    NavBarComponent
  ]
})
export class CoreModule{

}
