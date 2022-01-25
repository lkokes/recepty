import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Pizza', 'popis receptu', 'assets/images/pizza.jpg', [ new Ingredient('sunka', 1), new Ingredient('syr', 1)] ),
    new Recipe('Hamburger', 'popis receptu', 'assets/images/hamburger.jpg', [ new Ingredient('zemla', 1), new Ingredient('maso', 1)] )
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
