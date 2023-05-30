import { Recipes } from "../types/recipes";
import { Actions, NavigateActions, RecipesActions } from "../types/store"
import { firebase } from "../utils/Firebase";
import { Screens } from "../types/screens";

export const SaveRecipes = async (recipe: Recipes): Promise<Actions>=>{
    await firebase.SaveRecipeDB(recipe);
    return{
        action: RecipesActions.SAVE_RECIPE,
        payload: recipe,
    }
}

export const getRecipes = async(): Promise<Actions>=>{
    const recipes = await firebase.GetRecipesDB();
    return{
        action: RecipesActions.GET_RECIPES,
        payload: recipes,
    }
}
export const navigate = (screen: Screens) => {
    return {
      action: NavigateActions.NAVIGATE,
      payload: screen,
    };
  };