import { Component, OnInit } from '@angular/core';
import {ITournament} from "../../../models/tournament";
import {tournaments} from "../../../data/tournaments";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  tournamentsArr: ITournament[] = tournaments

  constructor() { }

  ngOnInit(): void {

  }

}
