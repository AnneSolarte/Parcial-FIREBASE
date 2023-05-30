import { appState } from "../../store";
import { dispatch  } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/screens";

class Recipes extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot) this.shadowRoot.innerHTML=""
        const container = this.ownerDocument.createElement('section');

        appState.recipes.forEach((p)=>{
            const recipe = this.ownerDocument.createElement('section');

            const name = this.ownerDocument.createElement("h2")
            name.innerText = p.name

            const ingredients = this.ownerDocument.createElement("p")
            ingredients.innerText = p.ingredients

            const instructions = this.ownerDocument.createElement("p")
            instructions.innerText = p.instructions

            const image = this.ownerDocument.createElement("p")
            image.innerText = p.img

            container.appendChild(recipe)
        })

        const ListBtn = this.ownerDocument.createElement("button");
        ListBtn.innerText = "Save"
        ListBtn.addEventListener("click",  () => {
            dispatch(navigate(Screens.CreateRecipe))
        })
        this.shadowRoot?.appendChild(container);
    }
}

customElements.define('my-recipes', Recipes)
export default Recipes