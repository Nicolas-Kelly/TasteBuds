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
            console.log(data);
        })
    };

}

//Event listeners
submitButton.on('click', getRecipes);