/*TODO: 
  []Update/Edit Items
      []Enter
        []Confirm
      []Cancel
        []Confirm
  []Add Item
    [x]Adds item
    []Add on enter
    [x]Clears field
    [x]Confirmation
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
    if (window.confirm("Do  you really want to add this task?")) { //implementation of II.1.a and II.1.b
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

    //adds 1 to listCount to keep track of how many items are in the list
    listCount = listCount + 1;
    //resets form field to empty on submit
    data.value = '';
    //calls on function which binds all new buttons created with functions
    bindNewElement();
  }
  //If user click's on cancel for prompt then it exits and doesn't add item.
}

/*This function is necessary as it connects the preexisting functions with the newly created
buttons. This is possible as deleteCount is defined and updated, and an event listner is
called for each deleteCount element.*/
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
  if (window.confirm("Do  you really want to delete this task?")) { //implementation of I.1.a. confirmation of deletion
  console.log("You clicked on the delete button!");
  console.log("e.target: " + e.target); //where is it being clicked?
  //when the button is clicked, then the element is removed from the screen...and eventually the array
  let target = e.target;
  listItem = target.parentNode;
  listItem.remove();
  listCount = listCount - 1;
  }
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

/*Implementation of task: I.2. User is able to enter new information on edit*/
let editItem = (i, e) => {
  console.log("You clicked on the edit button!");
  editforms[i].classList.remove('hidden');
  enters[i].classList.remove('hidden');
  cancels[i].classList.remove('hidden');

  //targets item that is clicked on.
  console.log("This event's parentNode is: " + e.target.parentNode);
  let listItem = e.target.parentNode;

  //select label value
  let labelValue = listItem.querySelector('label').innerHTML;
  //set form value;
  editforms[i].value = labelValue;
  //update label value;
}


/* Event listener for clicking on adding item*/
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


