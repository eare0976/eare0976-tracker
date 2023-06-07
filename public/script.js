function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

const form = document.getElementById("recipeform");
const button = document.querySelector("#recipeform > button");
const tasklist = document.getElementById("recipelist");

button.addEventListener("click", function(event) { 

  event.preventDefault();
  let names = form.elements.name.value;
  let date = (new Date()).toLocaleDateString('en-US')
  let categorys = form.elements.category.value;
  let preptimes = form.elements.preptime.value;
  let baketimes = form.elements.baketime.value;
  let recipes = form.elements.recipe.value;
  let ingredients = form.elements.ingredient.value;
addTask(names, date, categorys, preptimes, baketimes, recipes, ingredients); 
});

var formList = [];

function addTask(nameInputs, createdDates, categoryInputs, preptimeInputs, baketimeInputs, recipeInputs, ingredientInputs) {
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
  let item = document.createElement("li");
  item.innerHTML = 
  `<p><strong>${task.nameInputs}</strong><br><em>${task.categoryInputs}</em><br><br><b>Prep Time: </b>
   ${task.preptimeInputs}mins<br><b>Bake Time: </b>${task.baketimeInputs}mins <br> <b>Date Added: </b>${task.createdDates} </p> <span>test</span>
  `;
  // item.innerHTML = "<h2> Recipe " + formList.length + "</h2> <br> <p> <strong> Name: </strong> " + task.nameInputs + " <br> PrepTime: " + task.preptimeInputs + "<br> </strong>" + "BakeTime: " + task.baketimeInputs + "<br>" + "Date: " + task.createdDates + "</p>";
  console.log(formList);
  tasklist.appendChild(item); 

  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("Delete"); //🗑️
  delButton.appendChild(delButtonText);
  item.appendChild(delButton);

  let expandButton = document.createElement("button");
  let expandButtonText = document.createTextNode("Expand");
  expandButton.appendChild(expandButtonText);
  item.appendChild(expandButton);

  delButton.addEventListener("click", function(event) {
    item.remove();
  });
    //expandButton.addEventListener("click", function(event) {
   // need to add a function here which expands the box to show full recipe and ingredient list.

 
  form.reset();

}

// I want to make it so the paragraph in the div "Bakery" disappears when the user adds an item to the list, and make it so it reappears once all items are deleted (e.g. array is empty)
