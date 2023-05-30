
import { Form } from "../../components/export";

class CreateRecipe extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const form = this.ownerDocument.createElement('recipe-form') as Form;
        this.shadowRoot?.appendChild(form);
    }
}

customElements.define('create-recipe', CreateRecipe)
export default CreateRecipe