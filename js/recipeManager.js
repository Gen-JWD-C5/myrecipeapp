const createRecipeHtml = (title, course, serves, ingredients, instructions, id) => {
    const html = `<li id=${id}>
    <div class="card">
        <img id="cardImage" src="" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <h5>${course}</h5>
            <h5>Serves:</h5><span>${serves}</span>
            <h5>Ingredients:</h4>
            <p class="card-text">${ingredients}</p>
            <h5>Instructions:</h5>
            <p class="card-text">${instructions}</p>
            <div class="text-center">
            <button type="button" id="updateBtn" class="btn btn-outline-warning update-button">Update</button>
            <button type="button" id="deleteBtn" class="btn btn-outline-danger delete-button">Delete</button>
            </div>
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
        const starterCol = document.querySelector("#starterCol");
        const mainsCol = document.querySelector("#mainsCol");
        const dessertCol = document.querySelector("#dessertCol");

        const startersHtmlList = [];
        const mainsHtmlList = [];
        const dessertsHtmlList = [];

        for(let i = 0; i<this.recipes.length; i++) {
            let currentRecipe = this.recipes[i];
            const recipeHtml = createRecipeHtml(
                currentRecipe.title,
                currentRecipe.course,
                currentRecipe.serves,
                currentRecipe.ingredients,
                currentRecipe.instructions,
                currentRecipe.id
            );
            
            if(currentRecipe.course === "Starter") {
                startersHtmlList.push(recipeHtml);
                console.log("Starter")
                console.log(startersHtmlList)
            } else if (currentRecipe.course === "Main") {
                mainsHtmlList.push(recipeHtml);
                console.log("main")
            } else if (currentRecipe.course === "Dessert") {
                dessertsHtmlList.push(recipeHtml);
                console.log('dessert')
            }
        }
        const startersHtml = startersHtmlList.join("\n");
        starterCol.innerHTML = startersHtml;

        const mainsHtml = mainsHtmlList.join("");
        mainsCol.innerHTML = mainsHtml;

        const dessertHtml = dessertsHtmlList.join("");
        dessertCol.innerHTML = dessertHtml;
    };

    save(){
        const recipesJson = JSON.stringify(this._recipes);
        localStorage.setItem("recipes", recipesJson);
        const currentId = String(this._currentId);
        localStorage.setItem("currentId", currentId);
    }


    load(){
        if (localStorage.getItem("recipes")) {
            const recipesJson = localStorage.getItem("recipes");
            this._recipes = JSON.parse(recipesJson);
        }

        if (localStorage.getItem("currentId")) {
            const currentId = localStorage.getItem("currentId");
            this._currentId = Number(currentId);
        }
    }

    getRecipeById(recipeId) {
        let foundRecipe;
        for(let recipe of this._recipes) {
            if(recipe.id === recipeId) {
                foundRecipe = recipe;
            };
        };
        return foundRecipe; // returns recipe object
    }

    deleteRecipe(recipeId) {
        const newRecipes = [];
        for(let recipe of this._recipes) {
            if(recipe.id !== recipeId) {
                newRecipes.push(recipe);
                // console.log(recipe);
            }
            this._recipes = newRecipes;
    };
    }

}



