import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()

export class RecipesService {

    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe('Tasty Schnitzel',
    //      'A super-tasty Schnitzel - just awesome!.',
    //       'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
    //       [
    //           new Ingredient('Meat', 1),
    //           new Ingredient('French Fries', 20)
    //       ] 
    //       ),
    //     new Recipe('Big Fat Burger',
    //      'What else you need to say?',
    //       'https://images.all-free-download.com/images/graphiclarge/homemade_burger_560254.jpg',
    //       [
    //           new Ingredient('Meat', 1),
    //           new Ingredient('Buns', 2),
    //           new Ingredient('Tomato', 1),
    //           new Ingredient('Onion', 1),
    //           new Ingredient('cheese', 1)
    //       ]
    //       )
    
    // ];
    private recipes: Recipe[] = [];


    constructor( private shoppingListService: ShoppingListService) {}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes () {
        return this.recipes.slice(); 
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());

    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}