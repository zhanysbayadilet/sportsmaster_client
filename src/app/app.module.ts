import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main/main-page/main-page.component';
import { HeaderComponent } from './components/main/header/header.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { TournamentComponent } from './components/tournament/tournament.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    TournamentsComponent,
    TournamentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
