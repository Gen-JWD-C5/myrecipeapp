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
}

