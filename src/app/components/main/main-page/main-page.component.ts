import { Component, OnInit } from '@angular/core';
import {ITournament} from "../../../models/tournament";
import {tournaments} from "../../../data/tournaments";
import {ICategory} from "../../../models/category";
import {categories} from "../../../data/categories";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  categories: ICategory[] = categories

  constructor() { }

  ngOnInit(): void {

  }

}
