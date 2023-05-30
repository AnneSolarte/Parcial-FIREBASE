
class RecipeList extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

    }
}

customElements.define('recipe-list', RecipeList)
export default RecipeList