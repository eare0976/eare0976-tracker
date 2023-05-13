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
//    console.log(tasklist);
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
  renderTask(task); //
};

function renderTask(task) {
  let item = document.createElement("li");
  item.innerHTML = "<p> <strong>" + "Name " + formList.length + "PrepTime: " + formList.preptimeInput + "<br> </strong>" + "BakeTime: " + formList.baketimeInput + "<br>" + "Date: " + task.createdDate + "</p>";

  tasklist.appendChild(item); //

  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("delete");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton);

  delButton.addEventListener("click", function(event) {
    item.remove();
  });

  form.reset();

}
