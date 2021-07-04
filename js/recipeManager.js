const createRecipeHtml = (title, course, serves, ingredients, instructions) => {
    const html = `<li>
    <div class="card">
        <img id="cardImage" src="./images/chocolateCake.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <h5>${course}</h5>
            <h5>Serves:</h5><span>${serves}</span>
            <h5 >Ingredients:</h4>
            <p class="card-text">${ingredients}</p>
            <h5>Instructions:</h5>
            <p class="card-text">${instructions}</p>
        </div>
    </div>
    </li>`;
    return html;
}

class RecipeManager {
    constructor(currentId = 0) {
        this._recipes = [];
        this._currentId= currentId;
    }

    addRecipe(title, course, serves, ingredients, instructions) {
        const newRecipe = {
            id: this._currentId++,
            title: title,
            course: course,
            serves: serves,
            ingredients: ingredients,
            instructions: instructions
        }
    
        return this._recipes.push(newRecipe);
    }

    get recipes(){
        return this._recipes;
    }

    render() {
        const recipesHtmlList =[]
        for(let i = 0; i<this.recipes.length; i++) {
            let currentRecipe = this.recipes[i];
            const recipeHtml = createRecipeHtml(
                currentRecipe.title,
                currentRecipe.course,
                currentRecipe.serves,
                currentRecipe.ingredients,
                currentRecipe.instructions
            );
            recipesHtmlList.push(recipeHtml);
        }
    const recipeHtml = recipesHtmlList.join("");
    const starterCol = document.querySelector("#starterCol");
    starterCol.innerHTML = recipeHtml;
};
}
