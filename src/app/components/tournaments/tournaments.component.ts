import { Component, OnInit } from '@angular/core';
import {ITournament} from "../../models/tournament";
import {tournaments} from "../../data/tournaments";


@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit {

  tournamentsArr: ITournament[] = tournaments;

  constructor() { }

  ngOnInit(): void {
  }

}
