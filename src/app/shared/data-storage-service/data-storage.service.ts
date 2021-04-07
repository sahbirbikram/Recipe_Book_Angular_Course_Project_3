import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { RecipesService } from 'src/app/recipes/recipes.service';
import { Recipe } from 'src/app/recipes/recipe.model';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipesService: RecipesService, private authService: AuthService) { }

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();

    this.http.put('https://ng-course-recipe-book-bcfe2-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(
      (response) => {
        // console.log(response);
      }
    );
  }

  fetchRecipes() {

    return this.http.get<Recipe[]>('https://ng-course-recipe-book-bcfe2-default-rtdb.firebaseio.com/recipes.json').pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []
          };
        });
      }),
      tap(recipes => {
        this.recipesService.setRecipes(recipes);
      })
    );

  }



}
