const axios = require('axios');
function recipes(){
   const response= fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch');
   console.log(response);
}
recipes();
