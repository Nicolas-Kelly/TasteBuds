//variables
var userIngredients = $('#user-ingredients');
var dietFilter = $('.filter');
var submitButton = $('#submit-button');
var desiredCuisine = $('cuisine');
var userMaxIngredients = $('#max-ingredients');
var userMinCalories = $('#min-calories');
var userMaxCalories = $('#max-calories'); 


//Function for getting Recipes and Nutritional Facts after user hits submit
function getRecipes(){
    var checkedOptions = [];
    var dietFilterURL = '';

    //For loop for making an array of the users dietary options
    for(i=0; i<dietFilter.length; i++){
        if(dietFilter[i].checked === true){
            var filterItem = dietFilter[i].getAttribute('id');
            checkedOptions.push(filterItem);
        }
    }

    for(i=0; i<checkedOptions.length; i++){
        dietFilterURL = dietFilterURL + '&health=' + checkedOptions[i];
    }

    var ingredients = userIngredients.val();
    ingredients = ingredients.replaceAll(',', '');
    ingredients = ingredients.trim();
    ingredientsURL = ingredients.replaceAll(' ', '%20');
    console.log(ingredientsURL);

    var maxIngredients = userMaxIngredients.val();
    var minCalories = userMinCalories.val();
    var maxCalories = userMaxCalories.val();

    var calorieURL = minCalories + '-' + maxCalories;

    var edamamURL = 'https://api.edamam.com/api/recipes/v2?type=public&per_page=12&q=' + ingredientsURL + '&app_id=b9fe928c&app_key=db52e0a131b936a4951946eca553aa08&ingr=' + maxIngredients + dietFilterURL + '&calories=' + calorieURL;
    console.log(edamamURL);

    var n=5;
    if(n===5){
        fetch(edamamURL)
        .then( function(response) {
            console.log(response.status);
            return response.json();
        })
        .then(function (data){
            console.log(data)
            useApiData(data)
        })
    };

}

// Function to use the API data for recipe
function useApiData(data) {
 document.querySelector("#recipeCards").innerHTML = `
    <div class="bg-white rounded-md overflow-hidden relative shadow-md">
    <div>
      <img class="w-full" src=${data.hits[0].recipe.image} alt="Recipe Title">
    </div>
    <div class="p-4">
      <h2 class="text-2xl text-green-400">${data.hits[0].recipe.label}</h2>
      <div class="flex justify-between mt-4 mb-4 text-gray-500">
        <div class="flex items-center">
          <span class="ml-1 lg:text-xl">${data.hits[0].recipe.healthLabels[0]}</span>
        </div>
        <div class="flex items-center">
          <span class="ml-1 lg:text-xl">${data.hits[0].recipe.healthLabels[1]}</span>
        </div>
        <div class="flex items-center">
          <span class="ml-1 lg:text-xl">${data.hits[0].recipe.healthLabels[2]}</span>
        </div>
      </div>
      <a target="_blank" href="${data.hits[0].recipe.url}" class="text-white bg-green-400 p-4 rounded-md w-full uppercase">View Recipe</a>
    </div>
  </div>

  <div class="bg-white rounded-md overflow-hidden relative shadow-md">
    <div>
      <img class="w-full" src=${data.hits[1].recipe.image} alt="Recipe Title">
    </div>
    <div class="p-4">
      <h2 class="text-2xl text-green-400">${data.hits[1].recipe.label}</h2>
      <div class="flex justify-between mt-4 mb-4 text-gray-500">
        <div class="flex items-center">
          <span class="ml-1 lg:text-xl">${data.hits[1].recipe.healthLabels[0]}</span>
        </div>
        <div class="flex items-center">
          <span class="ml-1 lg:text-xl">${data.hits[1].recipe.healthLabels[1]}</span>
        </div>
        <div class="flex items-center">
          <span class="ml-1 lg:text-xl">${data.hits[1].recipe.healthLabels[2]}</span>
        </div>
      </div>
      <a target="_blank" href="${data.hits[1].recipe.url}" class="text-white bg-green-400 p-4 rounded-md w-full uppercase">View Recipe</a>
    </div>
  </div>

  <div class="bg-white rounded-md overflow-hidden relative shadow-md">
    <div>
      <img class="w-full" src=${data.hits[2].recipe.image} alt="Recipe Title">
    </div>
    <div class="p-4">
      <h2 class="text-2xl text-green-400">${data.hits[2].recipe.label}</h2>
      <div class="flex justify-between mt-4 mb-4 text-gray-500">
        <div class="flex items-center">
          <span class="ml-1 lg:text-xl">${data.hits[2].recipe.healthLabels[0]}</span>
        </div>
        <div class="flex items-center">
          <span class="ml-1 lg:text-xl">${data.hits[2].recipe.healthLabels[1]}</span>
        </div>
        <div class="flex items-center">
          <span class="ml-1 lg:text-xl">${data.hits[2].recipe.healthLabels[2]}</span>
        </div>
      </div>
      <a target="_blank" href="${data.hits[2].recipe.url}" class="text-white bg-green-400 p-4 rounded-md w-full uppercase">View Recipe</a>
    </div>
  </div>

  <div class="bg-white rounded-md overflow-hidden relative shadow-md">
    <div>
      <img class="w-full" src=${data.hits[3].recipe.image} alt="Recipe Title">
    </div>
    <div class="p-4">
      <h2 class="text-2xl text-green-400">${data.hits[3].recipe.label}</h2>
      <div class="flex justify-between mt-4 mb-4 text-gray-500">
        <div class="flex items-center">
          <span class="ml-1 lg:text-xl">${data.hits[3].recipe.healthLabels[0]}</span>
        </div>
        <div class="flex items-center">
          <span class="ml-1 lg:text-xl">${data.hits[3].recipe.healthLabels[1]}</span>
        </div>
        <div class="flex items-center">
          <span class="ml-1 lg:text-xl">${data.hits[3].recipe.healthLabels[2]}</span>
        </div>
      </div>
      <a target="_blank" href="${data.hits[3].recipe.url}" class="text-white bg-green-400 p-4 rounded-md w-full uppercase">View Recipe</a>
    </div>
  </div>

  <div class="bg-white rounded-md overflow-hidden relative shadow-md">
    <div>
      <img class="w-full" src=${data.hits[4].recipe.image} alt="Recipe Title">
    </div>
    <div class="p-4">
      <h2 class="text-2xl text-green-400">${data.hits[4].recipe.label}</h2>
      <div class="flex justify-between mt-4 mb-4 text-gray-500">
        <div class="flex items-center">
          <span class="ml-1 lg:text-xl">${data.hits[4].recipe.healthLabels[0]}</span>
        </div>
        <div class="flex items-center">
          <span class="ml-1 lg:text-xl">${data.hits[4].recipe.healthLabels[1]}</span>
        </div>
        <div class="flex items-center">
          <span class="ml-1 lg:text-xl">${data.hits[4].recipe.healthLabels[2]}</span>
        </div>
      </div>
      <a target="_blank" href="${data.hits[4].recipe.url}" class="text-white bg-green-400 p-4 rounded-md w-full uppercase">View Recipe</a>
    </div>
  </div>

  <div class="bg-white rounded-md overflow-hidden relative shadow-md">
    <div>
      <img class="w-full" src=${data.hits[5].recipe.image} alt="Recipe Title">
    </div>
    <div class="p-4">
      <h2 class="text-2xl text-green-400">${data.hits[5].recipe.label}</h2>
      <div class="flex justify-between mt-4 mb-4 text-gray-500">
        <div class="flex items-center">
          <span class="ml-1 lg:text-xl">${data.hits[5].recipe.healthLabels[0]}</span>
        </div>
        <div class="flex items-center">
          <span class="ml-1 lg:text-xl">${data.hits[5].recipe.healthLabels[1]}</span>
        </div>
        <div class="flex items-center">
          <span class="ml-1 lg:text-xl">${data.hits[5].recipe.healthLabels[2]}</span>
        </div>
      </div>
      <a target="_blank" href="${data.hits[5].recipe.url}" class="text-white bg-green-400 p-4 rounded-md w-full uppercase">View Recipe</a>
    </div>
  </div>

  <div class="bg-white rounded-md overflow-hidden relative shadow-md">
    <div>
      <img class="w-full" src=${data.hits[6].recipe.image} alt="Recipe Title">
    </div>
    <div class="p-4">
      <h2 class="text-2xl text-green-400">${data.hits[6].recipe.label}</h2>
      <div class="flex justify-between mt-4 mb-4 text-gray-500">
        <div class="flex items-center">
          <span class="ml-1 lg:text-xl">${data.hits[6].recipe.healthLabels[0]}</span>
        </div>
        <div class="flex items-center">
          <span class="ml-1 lg:text-xl">${data.hits[6].recipe.healthLabels[1]}</span>
        </div>
        <div class="flex items-center">
          <span class="ml-1 lg:text-xl">${data.hits[6].recipe.healthLabels[2]}</span>
        </div>
      </div>
      <a target="_blank" href="${data.hits[6].recipe.url}" class="text-white bg-green-400 p-4 rounded-md w-full uppercase">View Recipe</a>
    </div>
  </div>

  <div class="bg-white rounded-md overflow-hidden relative shadow-md">
    <div>
      <img class="w-full" src=${data.hits[7].recipe.image} alt="Recipe Title">
    </div>
    <div class="p-4">
      <h2 class="text-2xl text-green-400">${data.hits[7].recipe.label}</h2>
      <div class="flex justify-between mt-4 mb-4 text-gray-500">
        <div class="flex items-center">
          <span class="ml-1 lg:text-xl">${data.hits[7].recipe.healthLabels[0]}</span>
        </div>
        <div class="flex items-center">
          <span class="ml-1 lg:text-xl">${data.hits[7].recipe.healthLabels[1]}</span>
        </div>
        <div class="flex items-center">
          <span class="ml-1 lg:text-xl">${data.hits[7].recipe.healthLabels[2]}</span>
        </div>
      </div>
      <a target="_blank" href="${data.hits[7].recipe.url}" class="text-white bg-green-400 p-4 rounded-md w-full uppercase">View Recipe</a>
    </div>
  </div>
    `
  }

    
//Event listeners
submitButton.on('click', getRecipes);