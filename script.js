//variables
var userIngredients = $('#user-ingredients');
var dietFilter = $('.filter');
var submitButton = $('#submit-button');
var desiredCuisine = $('cuisine');
var userMaxIngredients = $('#max-ingredients');
var userMinCalories = $('#min-calories');
var userMaxCalories = $('#max-calories'); 
var recipeGrid = $('.grid');

recipeURLs = [];


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
            console.log(data.hits.length);

            for(i=0; i<data.hits.length; i++){
                var newDiv1 = document.createElement("div");
                newDiv1.classList.add('recipe-card', 'bg-white', 'rounded-md' , 'overflow-hidden', 'relative', 'shadow-md');
                recipeGrid.append(newDiv1);

                var newDiv2 = document.createElement('div');
                var recipeImage = document.createElement('img');
                recipeImage.classList.add('w-full');
                recipeImage.src = data.hits[i].recipe.images.REGULAR.url;
                newDiv2.append(recipeImage);

                var newDiv3 = document.createElement('div');
                newDiv3.classList.add('p-4');
                var h2 = document.createElement('h2');
                h2.classList.add('text-2xl', 'text-green-400');
                h2.textContent = data.hits[i].recipe.label;
                newDiv3.append(h2);
                var button = document.createElement('button');

                button.classList.add('recipe', 'text-white', 'bg-green-400', 'p-4', 'rounded-md', 'w-full', 'uppercase');
                button.textContent = 'View Full Recipe';
                var recipeURL = data.hits[i].recipe.url;
                recipeURLs.push(recipeURL);
                button.dataset.link = recipeURL;

                var newDiv4 = document.createElement('div');
                newDiv4.classList.add('flex', 'justify-between', 'mt-4', 'mb-4', 'text-gray-500');

                var newDiv5 = document.createElement('div');
                newDiv5.classList.add('flex', 'items-center');
                var span1 = document.createElement('span');
                span1.classList.add('ml-1', 'lg:text-xl');
                span1.textContent = data.hits[i].recipe.totalTime + 'min';
                newDiv5.append(span1);

                var newDiv6 = document.createElement('div');
                newDiv6.classList.add('flex', 'items-center');
                var span2 = document.createElement('span');
                span2.classList.add('ml-1', 'lg:text-xl');
                span2.textContent = data.hits[i].recipe.yield + ' servings';
                newDiv6.append(span2);

                newDiv1.append(newDiv2);
                newDiv1.append(newDiv3);
                //newDiv1.append(newDiv8);
                newDiv1.append(button);
                newDiv3.append(newDiv4);
                newDiv4.append(newDiv5);
                newDiv4.append(newDiv6);
                //newDiv4.append(newDiv7);

                console.log(newDiv1);

            }

            console.log(recipeURLs);
            var recipeElements = $('.recipe');
            for(i=0; i<recipeURLs.length; i++){
                recipeElements[i].addEventListener('click', function(){
                    var link = this.dataset.link;
                    console.log(link);
                    window.open(link, "_blank");
                })
            }

        })
    };

}

//Event listeners
submitButton.on('click', getRecipes);