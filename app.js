/*TODO: 
  [x]How to use foreach
  []Add new elements to html using javascript
    [x]Create Buttons Elements
      [x]Edit button
      [x]Delete button
    [x]Add new text
    []add button functionality
      []Delete
      []Edit
  []Array functionalities
    []Add
    []Delete
    []Edit
  []Delete Items
  []Update Items
      []Confirm
      []Cancel
  []Add Item
*/





/*Selects various dom elements*/
let form = document.querySelector("#addItem");
let data = document.querySelector("#task");
let testli = document.querySelector("#testli");
let removes = document.querySelectorAll(".delete");

let tasks = ["Walk Cat", "Walk Dog", "Walk Emu", "Talk to Emu", "Drink some beers", "Lift some weights or something"]
let tasksFinished = [];

/* Adds task to array function */
let addTask = () => {
  let newTask = getData();
  tasks.push(newTask);
  console.log(tasks);

  const newLi = document.createElement("li");
  const newLiContent = document.createTextNode(newTask);
  const checkBox = document.createElement("input");
  //creating new button
  const button = document.createElement("button");
  const deleteButton = document.createElement("button");

  //sets element attributes
  checkBox.type = "checkBox";
  button.innerText = "Editbra!";
  button.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";

  //append or add items to preexisting element
  newLi.appendChild(checkBox);
  newLi.appendChild(newLiContent);
  newLi.appendChild(button);
  newLi.appendChild(deleteButton);

  //selects element you are adding to
  const currentDiv = document.getElementById("ulthingie");
  //adds element
  currentDiv.append(newLi);

}


//Creates elements from array
let populateList = (t) => {
  const newLi = document.createElement("li");
  const newLiContent = document.createTextNode(t);
  const checkBox = document.createElement("input");
  //creating new button
  const button = document.createElement("button");
  const deleteButton = document.createElement("button");

  //sets element attributes
  checkBox.type = "checkBox";
  button.innerText = "Editbra!";
  button.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";

  //append or add items to preexisting element
  newLi.appendChild(checkBox);
  newLi.appendChild(newLiContent);
  newLi.appendChild(button);
  newLi.appendChild(deleteButton);

  //selects element you are adding to
  const currentDiv = document.getElementById("ulthingie");
  //adds element
  currentDiv.append(newLi);
}

//populates list with array
tasks.forEach(populateList);



/*Need to create a new element using createElement */
let addElement = () => {
  console.log("addElement function functional");
  const newInput = document.createElement("li");
  const newContent = document.createTextNode("Hi, How are ya!");
  newInput.appendChild(newContent);

  const currentDiv = document.getElementById("ulthingie");
  //adds element
  currentDiv.append(newInput);
}



function getTarget(e) {                          // Declare function
  if (!e) {                                      // If there is no event object
    e = window.event;                            // Use old IE event object
  }
  return e.target || e.srcElement;               // Get the target of event
}



/*Delete item */
let deleteItem = () => {
  console.log("You clicked on the delete button!");
  console.log(this.parentNode);
  //when the button is clicked, then the element is removed from the screen...and eventually the array
  let listItem = this.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
}




/* Gets Data from FORM */
let getData = () => {
  let newTask = data.value;
  console.log("Data Value: " + newTask);
  // populateList();
  return newTask;
}

/* Calls on eventListener for click event */
form.addEventListener("click", addTask)

/*Needs to put the remove in a loop as there are multiple objects that are not loaded based on the DOM or something like that.*/
for (const remove of removes) {
  remove.addEventListener("click", deleteItem)
}


testli.innerHTML = "ASDFASDAFSDFAD";

