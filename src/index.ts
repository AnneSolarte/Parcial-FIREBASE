import "./components/export"
import "./screens/export"
import { Screens } from "./types/screens";
import { appState } from "./store";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = "";

        switch (appState.screens) {
          case Screens.CreateRecipe:
            const createRecipe = this.ownerDocument.createElement("create-recipe");
            createRecipe.innerText = "Create";
            this.shadowRoot?.appendChild(createRecipe);
            break;

          case Screens.RecipeList:
            const recipeList = this.ownerDocument.createElement("recipe-list");
            recipeList.innerText = "List";
            this.shadowRoot?.appendChild(recipeList);
            break;
        }

    }
}

customElements.define('app-container', AppContainer)