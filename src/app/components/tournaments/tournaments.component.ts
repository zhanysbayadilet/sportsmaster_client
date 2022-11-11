import { Component, OnInit } from '@angular/core';
import {ICategory} from "../../models/category";
import {categories} from "../../data/categories";


@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit {

  categories: ICategory[] = categories;

  constructor() { }

  ngOnInit(): void {
  }

}
