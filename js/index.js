//initialize recipeManager
const recipeList = new RecipeManager();
recipeList.load();
recipeList.render();

//grab elements that I want to target for validation
const recipeTitle = document.querySelector("#recipeTitle");
// console.log("name: " + recipeTitle.value);
const course = document.querySelector("#course")
const serves = document.querySelector("#serves");
// console.log("serves: " + serves.value);
const chooseImage = document.querySelector("#chooseImage");
const ingredients = document.querySelector("#ingredients");
const instructions = document.querySelector("#instructions")

// grab submit button to use for event listener
const submitRecipeBtn = document.querySelector("#submitRecipe");

let validInput = 0;

// function to validate recipe name
const titleErrMsg = document.querySelector("#titleErrMsg");

const validRecipeName = () => {
    // console.log("in valid recipe function")
    if(recipeTitle.value === "" && recipeTitle.value.length < 3) {
        titleErrMsg.innerHTML = "Add a recipe title";
        titleErrMsg.style.color= "red";
        console.log(titleErrMsg);
    } else {
        titleErrMsg.innerHTML = "";
        validInput++
    }
};

// function to validate course choice
const courseErrMsg = document.querySelector("#courseErrMsg");

const validCourse = () => {
    // console.log("in valid course function")
    if(course.value === "") {
        courseErrMsg.innerHTML = "Choose a course";
        courseErrMsg.style.color= "red";
        console.log(courseErrMsg);
    } else {
        courseErrMsg.innerHTML = "";
        validInput++;
    }
};

// function to validate number of serves
const servesErrMsg = document.querySelector("#servesErrMsg");

const validServes = () => {
    // console.log("in valid serves function")
    if(serves.value === "") {
        servesErrMsg.innerHTML = "Add number of serves";
        servesErrMsg.style.color= "red";
        console.log(servesErrMsg);
    } else {
        servesErrMsg.innerHTML = "";
        validInput++;
    }
};

// function to validate ingredients
const ingredientsErrMsg = document.querySelector("#ingredientsErrMsg");

const validIngredients = () => {
    // console.log("in valid ingredients function")
    if(ingredients.value === ""  || ingredients.value.length < 5) {
        ingredientsErrMsg.innerHTML = "Add ingredients";
        ingredientsErrMsg.style.color= "red";
        console.log(ingredientsErrMsg);
    } else {
        ingredientsErrMsg.innerHTML = "";
        validInput++;
    }
};

// function to validate instructions
const instructionsErrMsg = document.querySelector("#instructionsErrMsg");

const validInstructions = () => {
    // console.log("in valid instructions function")
    if(instructions.value.length < 5 || instructions.value === "") {
        instructionsErrMsg.innerHTML = "Add instructions";
        instructionsErrMsg.style.color= "red";
        console.log(instructionsErrMsg);
    } else {
        instructionsErrMsg.innerHTML = "";
        validInput++;
    }
};

// add a click event on submit button that checks all validation functions
submitRecipeBtn.addEventListener("click", () => {
    validRecipeName();
    validCourse();
    validServes();
    validIngredients();
    validInstructions();
});

// function to add recipe to array if all forms fields are valid
const validFormFieldInput = () => {
   const form = document.querySelector("#form")
    if (validInput === 5) {
            recipeList.addRecipe(recipeTitle.value, course.value, serves.value, ingredients.value, instructions.value);
            console.log(recipeList.recipes);
            console.log(recipeList._currentId)
            recipeList.save();
            recipeList.load(),
            recipeList.render();
            validInput = 0;
        } else {
            validInput = 0;
        }
   
    form.reset()
}

//add click event to add recipes to array if all fields are valid
submitRecipeBtn.addEventListener("click", () => {
    validFormFieldInput();
} )

//adding event to delete button 

let recipeContainer = document.querySelector("#recipeContainer");
recipeContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete-button')) {
        console.log('clicked delete btn')
        const parentRecipe = e.target.parentElement.parentElement.parentElement.parentElement;
        console.log(parentRecipe)
        const recipeId = Number(parentRecipe.id);
        console.log(`clicked delete btn with id= ${recipeId}`);
        recipeList.deleteRecipe(recipeId);
        recipeList.save();
        recipeList.render();
    } 
    if(e.target.classList.contains('update-button')) {
        const parentRecipe = e.target.parentElement.parentElement.parentElement.parentElement;
        const recipeId = Number(parentRecipe.id);
        console.log(`clicked update btn with id= ${recipeId}`)
    }
});

        
           
    
    









