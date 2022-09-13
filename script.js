//url that includes the ingredients the user wants to eat
var url = 'https://api.spoonacular.com/recipes/findByIngredients?apiKey=7eec931589c14d89b714a88f037239c1&ingredients=apples,+flour,+sugar&number=1'

var n=5;

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

var edamamURL = 'https://api.edamam.com/api/nutrition-data?app_id=9640b10a&app_key=91c330f1156c5b44712e4a0dc56558f3&nutrition-type=cooking&ingr=1%20pound%20salmon';

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