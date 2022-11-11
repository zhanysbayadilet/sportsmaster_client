import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main/main-page/main-page.component';
import { HeaderComponent } from './components/main/header/header.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { Header2Component } from './components/main/header2/header2.component';
import { TournamentComponent } from './components/tournament/tournament.component';
import {FilterProductsPipe} from "./components/pipes/filter-tournament.pipe";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    TournamentsComponent,
    TournamentComponent,
    Header2Component,
    FilterProductsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
