var searchButton = document.getElementById('search');

// Add event listener to search button when clicked
searchButton.addEventListener("click", ()=>{
    console.log("Searched.")
});

// Search params to use when calling fetch()
var params = new URLSearchParams({
    // ingr is for entry for the ingredient to query. EX. 1 cup of sugar
    ingr: '1 cup of sugar'
})

// The fetch passes the params through the URL and is parsed into a JSON structure
fetch(`https://api.edamam.com/api/nutrition-data?app_id=21d9b47c&app_key=3e0148b2cafbdb7aef7b18958e6ad3b2&nutrition-type=cooking&${params}`)
    .then(response => response.json())
    .then(console.log);