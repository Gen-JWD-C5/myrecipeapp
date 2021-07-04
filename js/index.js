//initialize recipeManager
const recipeList = new RecipeManager();

//grab elements that I want to target for validation
const newRecipeTitle = document.querySelector("#recipeTitle");
console.log("name: " + newRecipeTitle.value);
const chooseCourse = document.querySelector("#course")
const numServe = document.querySelector("#serves");
console.log("serves: " + numServe.value);
const chooseImage = document.querySelector("#chooseImage");
const ingredients = document.querySelector("#ingredients");
const instructions = document.querySelector("#instructions")


// function to validate recipe name
const titleErrMsg = document.querySelector("#titleErrMsg");
const submitRecipeBtn = document.querySelector("#submitRecipe");

const validRecipeName = () => {
    console.log("in valid recipe function")
    if(newRecipeTitle.value === "" && newRecipeTitle.value.length < 3) {
        titleErrMsg.innerHTML = "Add a recipe title";
        titleErrMsg.style.color= "red";
        console.log(titleErrMsg);
    } else {
        titleErrMsg.innerHTML = "";
    }
};

// submitRecipeBtn.addEventListener("click", validRecipeName)

// function to validate course choice
const courseErrMsg = document.querySelector("#courseErrMsg");

const validCourse = () => {
    console.log("in valid course function")
    if(chooseCourse.value === "") {
        courseErrMsg.innerHTML = "Choose a course";
        courseErrMsg.style.color= "red";
        console.log(courseErrMsg);
    } else {
        courseErrMsg.innerHTML = "";
    }
};

// function to validate number of serves
const servesErrMsg = document.querySelector("#servesErrMsg");

const validServes = () => {
    console.log("in valid serves function")
    if(numServe.value === "") {
        servesErrMsg.innerHTML = "Add number of serves";
        servesErrMsg.style.color= "red";
        console.log(servesErrMsg);
    } else {
        servesErrMsg.innerHTML = "";
    }
};

// function to validate ingredients
const ingredientsErrMsg = document.querySelector("#ingredientsErrMsg");

const validIngredients = () => {
    console.log("in valid ingredients function")
    if(ingredients.value === ""  || ingredients.value.length < 5) {
        ingredientsErrMsg.innerHTML = "Add ingredients";
        ingredientsErrMsg.style.color= "red";
        console.log(ingredientsErrMsg);
    } else {
        ingredientsErrMsg.innerHTML = "";
    }
};

// function to validate instructions
const instructionsErrMsg = document.querySelector("#instructionsErrMsg");

const validInstructions = () => {
    console.log("in valid instructions function")
    if(instructions.value.length < 5 || instructions.value === "") {
        instructionsErrMsg.innerHTML = "Add instructions";
        instructionsErrMsg.style.color= "red";
        console.log(instructionsErrMsg);
    } else {
        instructionsErrMsg.innerHTML = "";
    }
};

// function to add recipe to array if all forms fields are valid
const validFormFieldInput = () => {
   
    if (validRecipeName &&
        validCourse &&
        validServes &&
        validIngredients &&
        validInstructions) {
            recipeList.addRecipe(newRecipeTitle.value, chooseCourse.value, numServe.value, ingredients.value, instructions.value);
            console.log(recipeList.recipes);
            recipeList.render();
            
        } else {
            return null;
        }
   
    form.reset()
}

// add a click event on submit button that checks all validation functions
submitRecipeBtn.addEventListener("click", () => {
    validRecipeName();
    validCourse();
    validServes();
    validIngredients();
    validInstructions();
});

//add click event to add recipes to array if all fields are valid
submitRecipeBtn.addEventListener("click", () => {
    validFormFieldInput();
} )




