/*TODO: 
  [x]How to use foreach
  [x]Add new elements to html using javascript
    [x]Create Buttons Elements
      [x]Edit button
      [x]Delete button
        [x]Hidden Section
          [x]Form field
          [x]Cancel
          [x]Enter
    [x]Add new text
  []Array functionalities
    [x]Add
    []Delete
    []Edit
  [x]Delete Items
    [x]Delete 1 item
    [x]Delete all items
    []Confirm
  []Update/Edit Items
      []Enter
        []Confirm
      []Cancel
        []Confirm
  []Add Item
    [x]Adds item
    []Add on enter
    [x]Clears field
*/

/*Selects various elements of the html page, form for adding new item button, 
data for the text of the new todo item*/
let form = document.querySelector("#addItem");
let data = document.querySelector("#task");

//need to move these to inside of loop
let editforms = document.querySelectorAll("input.editForm");
let enters = document.querySelectorAll("button.enter");
let cancels = document.querySelectorAll("button.cancel");

/*
Here I've created an array, although it is not implemented further, the idea for later
versions is that the array would be able to support more dynamic data formats.
*/
let tasks = ["Walk Cat", "Walk Dog", "Walk Emu", "Talk to Emu", "Drink some beers", "Lift some weights or something"]
let tasksFinished = []; //taskFinished was never implemented.

//the listCount starts off at 5 because there are 5 preexisting items in the list at the start
let listCount = 5;


/*Implementation of task II. 1. 
Adds new task and it's html elements. */
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

  //create hidden edit section
  const editForm = document.createElement("form");
  const editConfirm = document.createElement("button");
  const editCancel = document.createElement("button");

  //sets element attributes
  checkBox.type = "checkBox";
  button.innerText = "Edit";
  button.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  editForm.className = "editForm hidden";
  editConfirm.className = "enter hidden";
  editCancel.className = "cancel hidden";

  //append or add items to preexisting element
  newLi.appendChild(checkBox);
  newLi.appendChild(newLiContent);
  newLi.appendChild(button);
  newLi.appendChild(deleteButton);

  newLi.appendChild(editForm);
  newLi.appendChild(editConfirm);
  newLi.appendChild(editCancel);

  //selects element you are adding to
  const currentDiv = document.getElementById("ulthingie");
  //adds element
  currentDiv.append(newLi);

  //resets form field to empty
  listCount = listCount + 1;
  data.value = '';
  //calls on function which binds all new buttons created with functions
  bindNewElement();
}

let bindNewElement = () => {
  let deleteCount = document.querySelectorAll("button.delete");
  for (let i = 0; i < listCount; i++) {
    deleteCount[i].addEventListener("click", function (e) {
      deleteItem(e);
    });
  }

  /*Delete item */
  // let deleteItem = (e) => {
  //   console.log("You clicked on the delete button!");
  //   console.log("e.target: " + e.target); //where is it being clicked?
  //   //when the button is clicked, then the element is removed from the screen...and eventually the array
  //   let target = e.target;
  //   listItem = target.parentNode;
  //   listItem.remove();
  //   listCount = listCount - 1;
  //   return 0;
  // }
}

/*
Implementation of task: I.1.
Delete item */
let deleteItem = (e) => {
  if (window.confirm("Do  you really want to delete this task?")) {
  console.log("You clicked on the delete button!");
  console.log("e.target: " + e.target); //where is it being clicked?
  //when the button is clicked, then the element is removed from the screen...and eventually the array
  let target = e.target;
  listItem = target.parentNode;
  listItem.remove();
  listCount = listCount - 1;
  }
  // return 0;
}

//this is a test function for getting the target
let getFormValue = (e) => {
  //specifiy form number
  let listItem = e.target.parentNode;
  let text = listItem.querySelector('p');
  //get the value
  return text;
  //display value

  //return value
}

/*Edit Item*/
let editItem = (i, e) => {
  console.log("You clicked on the edit button!");
  editforms[i].classList.remove('hidden');
  enters[i].classList.remove('hidden');
  cancels[i].classList.remove('hidden');

  //need to get information from form
  //need to update dom to reflect it.
  console.log("This event's parentNode is: " + e.target.parentNode);
  let listItem = e.target.parentNode;
  // listItem.querySelector('label').innerHTML = updateItem;
  // let updateItem = editforms[i].value;
  // e.target.parentNode.input.innerHTML = "TEXT CHANGED!";

  //select label value
  let labelValue = listItem.querySelector('label').innerHTML;
  //set form value;
  editforms[i].value = labelValue;
  //update label value;
}



/* Calls on eventListener for click event */
form.addEventListener("click", addTask)

let removes = document.querySelectorAll("button.delete");
let edits = document.querySelectorAll("button.edit");

for (let i = 0; i < listCount; i++) {
  removes[i].addEventListener("click", function (e) {
    // bindNewElement();
    deleteItem(e);
  });

  // edit.addEventListener("click", editItem)
  edits[i].addEventListener("click", function (e) {
    // bindNewElement();
    getFormValue(e);
    editItem(i, e);
  });
}


