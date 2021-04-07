import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';
import { RecipesResolverService } from './recipes-resolver.service';
import { AuthGaurd } from '../auth/auth.gaurd';


const routes: Routes = [
    { path: '', component: RecipesComponent, canActivate: [AuthGaurd], children: [
        { path: '', component: RecipeStartComponent},
        { path: 'new', component: RecipeEditComponent},
        { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService]},
        { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]}
      ] 
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule {}