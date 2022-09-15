//variables
userIngredients = $('#user-ingredients');
dietFilter = $('.filter');
submitButton = $('#submit-button');



function getRecipes(){
    
    var checkedOptions = [];

    for(i=0; i<dietFilter.length; i++){
        if(dietFilter[i].checked === true){
            var filterItem = dietFilter[i].getAttribute('id');
            checkedOptions.push(filterItem);
        }
    }

    if(checkedOptions.length >= 1){
        var filterUrlText = 'Health'
    }


    var ingredients = userIngredients.val();
    var ingredients = ingredients.replaceAll(',', '');
    var ingredientsURL = ingredients.replaceAll(' ', '%20');
    console.log(ingredients);

}

var n=2;

//var edamamURL = 'https://api.edamam.com/api/nutrition-data?app_id=9640b10a&app_key=91c330f1156c5b44712e4a0dc56558f3&nutrition-type=cooking&ingr=1%20pound%20salmon';
var edamamURL = 'https://api.edamam.com/api/recipes/v2?type=public&q=chicken%2C%20tomato%2C%20pasta&app_id=b9fe928c&app_key=db52e0a131b936a4951946eca553aa08&ingr=5&diet=balanced&health=fish-free&mealType=Dinner&calories=100-2000&time=60';

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


//url that includes the ingredients the user wants to eat
var url = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey=7eec931589c14d89b714a88f037239c1&ingredients=apples,+flour,+sugar&number=1'

if(n===3){
    fetch(url)
    .then( function(response) {
        console.log(response.status);
        return response.json();
    })
    .then(function (data){
        console.log(data);
    })
}


//Event listeners
submitButton.on('click', getRecipes);