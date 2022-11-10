import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./components/main/main-page/main-page.component";
import {TournamentsComponent} from "./components/tournaments/tournaments.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'tournaments', component: TournamentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
