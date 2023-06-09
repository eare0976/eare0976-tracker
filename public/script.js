function myFunction() { //applys for form pop up
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

const form = document.getElementById("recipeform");
const tasklist = document.getElementById("recipelist");

form.addEventListener("submit", function(event) { 
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  event.preventDefault();
  let names = form.elements.name.value;
  let date = (new Date()).toLocaleDateString('en-AU') //used in render task
  let categorys = form.elements.category.value;
  let preptimes = form.elements.preptime.value;
  let baketimes = form.elements.baketime.value;
  let recipes = form.elements.recipe.value;
  let ingredients = form.elements.ingredient.value;
addTask(names, date, categorys, preptimes, baketimes, recipes, ingredients); 
});

var formList = [];

function addTask(nameInputs, createdDates, categoryInputs, preptimeInputs, baketimeInputs, recipeInputs, ingredientInputs) {
recipeInputs = recipeInputs.split("\n"); //turns a long string in recipeInputs into an array of strings: this is split by \n or new line (when user presses enter)
ingredientInputs = ingredientInputs.split("\n"); //same for ingredientInputs
  let task = {
    nameInputs,
    createdDates,
    categoryInputs,
    preptimeInputs,
    baketimeInputs,
    recipeInputs,
    ingredientInputs,
  };
  formList.push(task);
  renderTask(task); 
};

function renderTask(task) {
  var paragraph = document.getElementById("test"); //gets ID of the text in the bakery section
  //Another note: when I tried to change ID of 'test' I would get an error so I kept it

  if (formList.length === 1) { //checks if the form list array is equal to 1, this is used instead of a more than as then the text will toggle instead or remain hidden
    paragraph.classList.toggle("hidden"); //this toggles the text to hidden
  };
  const imagePath = getImagePath(task.categoryInputs);

  function getImagePath(selectedValue) { //returns an image url based on the category a user put
    switch (selectedValue) {
      case 'Chocolate Confectionary':
        return 'https://img.delicious.com.au/6SGt2wE2/del/2015/10/gingerbread-brownies-14280-1.jpg';
      case 'Pastry':
        return 'https://www.coccorocco.com.au/catering/home4/coccoroc/public_html/news/wp-content/uploads//2017/08/Pastries-Danish.jpg';
      case 'Quick-Bread':
        return 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/5/7/1/FN_quickbreads-scones-muffins-story-opener_s4x3.jpg.rend.hgtvcom.616.462.suffix/1431052446458.jpeg';
      case 'Cake':
        return 'https://assets.epicurious.com/photos/5af313a832c9206db5f1a110/4:3/w_5588,h_4191,c_limit/no-recipe-required-pound-cake-30082016.jpg';
      case 'Pie':
        return 'https://www.groupon.com/thegist/wp-content/uploads/2021/10/Main-1.jpeg';
      case 'Cookie':
        return 'https://recipes.timesofindia.com/photo/83804240/83804240.jpg';
      case 'Bread':
        return 'https://insanelygoodrecipes.com/wp-content/uploads/2022/08/Mixed-Breads-in-Basket-and-Wooden-Cutting-Board-800x530.jpg';
      default:
        return '';
    };
  };
  
  let item = document.createElement("section"); //establishes element for first row of user recipe data which includes the img, prep time, bake time, name, category, created date and the delete button
  item.innerHTML = 
  `<img src="${imagePath}" alt="Selected Image"> <p><strong>${task.nameInputs}</strong><br><em>${task.categoryInputs}</em><br><br><b>Prep Time: </b>
   ${task.preptimeInputs} minutes<br><b>Bake Time: </b>${task.baketimeInputs} minutes <br> <b>Date Added: </b>${task.createdDates} </p></section>`;
  
  let other = document.createElement("aside"); //establishes element for second row of user recipe data which includes ordered list for recipe and unordered list for ingredients
  other.innerHTML = `<div id="container">
  <div class="list-container">
  <b>Steps</b><br>
    <ol id="ordered-list" class="list">${task.recipeInputs.map(item => `<li>${item}</li>`).join('')}</ol>
  </div>
  <div class="list-container">
  <b>Ingredients</b><br>
    <ul id="unordered-list" class="list">${task.ingredientInputs.map(item => `<li>${item}</li>`).join('')}</ul>
  </div>
</div>
 `;
  console.log(formList);

  let delButton = document.createElement("button"); //code for delete button
  let delButtonText = document.createTextNode("✖"); 
  delButton.appendChild(delButtonText);
  item.appendChild(delButton);

  tasklist.appendChild(item); 
  tasklist.appendChild(other);

  delButton.addEventListener("click", function(event) { //code for delete button functionality
    item.remove(); //removes first row
    other.remove(); //removes second row
    formList.pop(task); //removes data from array
    if (formList.length === 0) { //checks if the array is empty
      paragraph.classList.toggle("hidden"); //if array is empty the "empty bakery" text reappears
    }
  });
  console.log(task.recipeInputs.length);
 
  form.reset();

};
