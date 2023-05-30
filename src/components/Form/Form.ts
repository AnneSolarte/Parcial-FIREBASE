import { RecipeList } from "../../screens/export";
import { addObserver, appState } from "../../store";
import { dispatch } from "../../store";
import { SaveRecipes, navigate } from "../../store/actions";
import { Recipes } from "../../types/recipes";
import { Screens } from "../../types/screens";

const FormData: Recipes = {
    name: "",
    ingredients: "",
    img: "",
    instructions: ""
}

class Form extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        const RecipeForm = this.ownerDocument.createElement('section');
        RecipeForm.className = "CreateRecipeForm"

        const labelName = this.ownerDocument.createElement("label")
        labelName.textContent = "Name"
        RecipeForm.appendChild(labelName)

        const rName = this.ownerDocument.createElement("input");
        rName.addEventListener("change", (e: any) => {
            FormData.name = e.target.value
        })
        RecipeForm.appendChild(rName)

        const labelIngredients = this.ownerDocument.createElement("label")
        labelIngredients.textContent = "Ingredients"
        RecipeForm.appendChild(labelIngredients)

        const rIngredients = this.ownerDocument.createElement("input");
        rIngredients.addEventListener("change", (e: any) => {
            FormData.ingredients = e.target.value
        })
        RecipeForm.appendChild(rIngredients)

        const labelInstrutions = this.ownerDocument.createElement("label")
        labelInstrutions.textContent = "Instrutions"
        RecipeForm.appendChild(labelInstrutions)

        const rInstructions = this.ownerDocument.createElement("input");
        rInstructions.addEventListener("change", (e: any) => {
            FormData.instructions = e.target.value
        })
        RecipeForm.appendChild(rInstructions)

        const labelImage = this.ownerDocument.createElement("label")
        labelImage.textContent = "Image"
        RecipeForm.appendChild(labelImage)

        const rImage = this.ownerDocument.createElement("input");
        rImage.type = "file"
        rImage.addEventListener("change", (e: any) => {
            FormData.img = e.target.value
        })
        RecipeForm.appendChild(rImage)

        const SaveBtn = this.ownerDocument.createElement("button");
        SaveBtn.innerText = "Save"
        SaveBtn.addEventListener("click", async () => {
            console.log(FormData)
            dispatch(await SaveRecipes(FormData))
        })
        RecipeForm.appendChild(SaveBtn)

        const ListBtn = this.ownerDocument.createElement("button");
        ListBtn.innerText = "List of recipes"
        ListBtn.addEventListener("click",  () => {
            dispatch(navigate(Screens.RecipeList))
        })
        RecipeForm.appendChild(ListBtn)
        this.shadowRoot?.appendChild(RecipeForm);
    }
}

customElements.define('recipe-form', Form)
export default Form