import { RecipesActions, NavigateActions } from "../types/store";
import { AppState } from "../types/store";
import { Actions } from "../types/store";

export const reducer = (actions: Actions, appState: AppState) => {
    const {action, payload} = actions;

    switch (action) {
        case RecipesActions.SAVE_RECIPE:
            appState.recipes = [...appState.recipes, payload]
            return appState

        case RecipesActions.GET_RECIPES:
            appState.recipes = payload
            return appState

        case NavigateActions.NAVIGATE:
            appState.screens = payload;
            return appState

        default:
            return appState
    }
}