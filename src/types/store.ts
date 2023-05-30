export type Observer = { render: () => void } & HTMLElement;
import { Recipes } from "./recipes";
import { Screens } from "./screens";

export type AppState = {
  recipes: Recipes[];
  screens: Screens;
};

export enum RecipesActions {
  "SAVE_RECIPE" = "SAVE_RECIPE",
  "GET_RECIPES" = "GET_RECIPES",
}

export enum NavigateActions {
  "NAVIGATE" = "NAVIGATE",
}

export interface Navigate {
  action: NavigateActions.NAVIGATE;
  payload: Screens
}

export interface SaveRecipe {
  action: RecipesActions.SAVE_RECIPE;
  payload: Recipes
}

export interface GetRecipes {
  action: RecipesActions.GET_RECIPES;
  payload: Recipes[]
}


export type Actions = SaveRecipe | GetRecipes | Navigate;
