import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; //módulo de rotas do angular

import { AppComponent } from './app.component';
import { CouseListComponet } from './courses/couses-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';

@NgModule({
  declarations: [
    AppComponent,
    CouseListComponet,
    StarComponent,
    ReplacePipe,
    NavBarComponent, // referente a tag <app-nav-bar> menu
    Error404Component
  ],
  imports: [ //tudo que é módulo é colocado aqui
    BrowserModule,
    FormsModule,

    // essa array espera um objeto de rota
    RouterModule.forRoot([  // assim que inicializar já vai carragar nossas rotas
      //array com uma serie de objetos que vai ter na aplicação
        {//objeto de rota
          //url da rota, de acordo com o que for digitado no browser
          path: ''/*o path vazio, diz para o angula quando estiver na porta 4200 raiz*/, redirectTo:'courses' /*vai redirecionar para course*/, pathMatch:'full'
        },
        {//listar
          path:'courses', component:CouseListComponet
        },
        {
          path:'**', component: Error404Component /*o '**' signigica quando não encontrar uma rota(url)*/
        }

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
