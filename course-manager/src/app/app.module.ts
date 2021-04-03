import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router'; //módulo de rotas do angular

import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { Error404Component } from './error-404/error-404.component';

import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component
  ],
  imports: [ //tudo que é módulo é colocado aqui
    BrowserModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    // essa array espera um objeto de rota
    RouterModule.forRoot([  // assim que inicializar já vai carragar nossas rotas
        {//listar
          path:'', redirectTo:'courses', pathMatch:'full'
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
