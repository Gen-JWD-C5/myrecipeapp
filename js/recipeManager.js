const createRecipeHtml = (title, course, serves, ingredients, instructions) => {
    const html = `<li>
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
            <button tyidpe="button" id="deleteBtn" class="btn btn-outline-danger delete-button">Delete</button>
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
                currentRecipe.instructions
            );
            
            if(currentRecipe.course === "Starter") {
                startersHtmlList.push(recipeHtml);
                console.log("Starter")
                console.log(startersHtmlList)
            } else if (currentRecipe.course === "Main") {
                mainsHtmlList.push(recipeHtml);
            } else if (currentRecipe.course === "Dessert") {
                dessertsHtmlList.push(recipeHtml);
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
        let recipesJson = JSON.stringify(this.recipes);
        localStorage.setItem("recipes", recipesJson);
        let currentId = JSON.stringify(this.currentId);
        localStorage.setItem("currentId", currentId);
    }


    load(){
        //check if there are any tasks in localStorage
        if(localStorage.getItem("recipes")){
        let recipesJson = localStorage.getItem("recipes");
        this.recipes = JSON.parse(recipesJson);
        }

        if(localStorage.getItem("currentId")){
        let currentId = localStorage.getItem("currentId");
        this.currentId = JSON.parse(currentId);
        }
    }


    
}



