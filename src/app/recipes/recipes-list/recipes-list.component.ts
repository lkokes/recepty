import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('názov', 'popis receptu', 'assets/images/recept-kura.jpg'),
    new Recipe('názov', 'popis receptu', 'assets/images/recept-kura.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
