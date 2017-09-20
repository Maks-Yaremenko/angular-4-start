import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from "@angular/forms";
import { RouterModule }     from '@angular/router';

import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from './shared/hero-detail/hero-detail.component';
import { HeroService }          from './shared/hero.service';

import { HeroesComponent }      from './pages/heroes/heroes.component';
import { DashboardComponent }   from './pages/dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
