import { Component, OnInit } from '@angular/core';
import {ITournament} from "../../models/tournament";
import {tournaments} from "../../data/tournaments";

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  tournaments: ITournament[] = tournaments;

  constructor() { }

  ngOnInit(): void {
  }

}
