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
    [x]Add
    []Delete
    []Edit
  []Delete Items
    [x]Delete 1 item
  []Update Items
      []Confirm
      []Cancel
  []Add Item
    [x]Adds item
    []Add on enter
    [x]Clears field
*/


/*Selects various dom elements*/
let form = document.querySelector("#addItem");
let data = document.querySelector("#task");
let testli = document.querySelector("#testli");

//why do these not fucking work?
// let removes = document.querySelectorAll("button.delete");
let removes = document.querySelector("button.delete");
let edit = document.querySelector("button.edit"); 
let fuck = document.querySelector("button.fuckyou");


let editforms = document.querySelector("input.editForm");
let enters = document.querySelector("button.enter");
let cancels = document.querySelector("button.cancel");

let tasks = ["Walk Cat", "Walk Dog", "Walk Emu", "Talk to Emu", "Drink some beers", "Lift some weights or something"]
let tasksFinished = [];

/* Adds task to array function */
let addTask = () => {
  //getting value from data
  let newTask = data.value;
  tasks.push(newTask);
  console.log(tasks);

  //creating html elements
  const newLi = document.createElement("li");
  const newLiContent = document.createTextNode(newTask);
  const checkBox = document.createElement("input");
  //creating new button
  const button = document.createElement("button");
  const deleteButton = document.createElement("button");

  //sets element attributes
  checkBox.type = "checkBox";
  button.innerText = "Edit";
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
  // populateList(tasks);

  //resets form field to empty
  data.value = '';
}

//Creates elements from array
// let populateList = (t) => {
//   const newLi = document.createElement("li");
//   const newLiContent = document.createTextNode(t);
//   const checkBox = document.createElement("input");
//   //creating new button
//   const button = document.createElement("button");
//   const deleteButton = document.createElement("button");

//   //sets element attributes
//   checkBox.type = "checkBox";
//   button.innerText = "Editbra!";
//   button.className = "edit";
//   deleteButton.innerText = "Delete";
//   deleteButton.className = "delete";

//   //append or add items to preexisting element
//   newLi.appendChild(checkBox);
//   newLi.appendChild(newLiContent);
//   newLi.appendChild(button);
//   newLi.appendChild(deleteButton);

//   //selects element you are adding to
//   const currentDiv = document.getElementById("ulthingie");
//   //adds element
//   currentDiv.append(newLi);
// }

// //populates list with array
// tasks.forEach(populateList);


/*Delete item */
let deleteItem = (e) => {
  console.log("You clicked on the delete button!");
  console.log("e.target: " + e.target);
  //when the button is clicked, then the element is removed from the screen...and eventually the array
  let target = e.target;
  listItem  = target.parentNode;
  listItem.remove();
  return 0;
}


/*Edit Item*/
let editItem = (e) =>{
  console.log("You clicked on the edit button!");
  editforms.classList.remove('hidden');
  // enters.classList.remove('hidden');
  // cancels.classList.remove('hidden');
  // let target = e.target;
  // console.log("e.target" + target);
}


/* Calls on eventListener for click event */
form.addEventListener("click", addTask)

/*Needs to put the remove in a loop as there are multiple objects that are not loaded based on the DOM or something like that.*/
// for (const remove of removes) {
//   remove.addEventListener("click", deleteItem(e))
// }
removes.addEventListener("click", function (e){
  deleteItem(e);
})

testli.innerHTML = "ASDFASDAFSDFAD";


fuck.addEventListener("click", function fuckYou(){
  console.log("fucking hell");
})




// edit.addEventListener("click", editItem)
edit.addEventListener("click", function (e){
  editItem(e);
})