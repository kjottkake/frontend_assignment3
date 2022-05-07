/*TODO: 
  [x]How to use foreach
  []Add new elements to html using javascript
    [x]Create Buttons Elements
      [x]Edit button
      [x]Delete button
        []Hidden Section
          []Form field
          []Cancel
          []Enter
    [x]Add new text
    []add button functionality
      []Delete
      []Edit
  []Array functionalities
    [x]Add
    []Delete
    []Edit
  [x]Delete Items
    [x]Delete 1 item
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


/*Selects various dom elements*/
let form = document.querySelector("#addItem");
let data = document.querySelector("#task");
let testli = document.querySelector("#testli");

//why do these not fucking work?

//The variables need to be changed into arrays
// let removes = document.querySelectorAll("button.delete");
// let removes = document.querySelectorAll("button.delete");
// let edits = document.querySelectorAll("button.edit"); 


//testing selecting lis
let lists = document.querySelectorAll("li");


let editforms = document.querySelectorAll("input.editForm");
let enters = document.querySelectorAll("button.enter");
let cancels = document.querySelectorAll("button.cancel");

let tasks = ["Walk Cat", "Walk Dog", "Walk Emu", "Talk to Emu", "Drink some beers", "Lift some weights or something"]
let tasksFinished = [];

let listCount = 5;


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

  //creat hidden edit section
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
  // populateList(tasks);

  //resets form field to empty
  listCount = listCount + 1;
  data.value = '';
  // getRemoves();
  listCounter();
  deleteCounter();
}

//tests count for redefinition of selected dom stuff
let listCounter = () => {
  let listCount = document.querySelectorAll("li");
  return listCount;
}

let deleteCounter = () => {
  let deleteCount = document.querySelectorAll("button.delete");
  for (let i = 0; i < listCount; i++) {
    deleteCount[i].addEventListener("click", function (e) {
      deleteItem(e);
    });
  }
  return deleteCount;
}

/*Delete item */
let deleteItem = (e) => {
  console.log("You clicked on the delete button!");
  console.log("e.target: " + e.target); //where is it being clicked?
  //when the button is clicked, then the element is removed from the screen...and eventually the array
  let target = e.target;
  listItem = target.parentNode;
  listItem.remove();
  listCount = listCount - 1;
  return 0;
}

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
    deleteItem(e);
  });

  // edit.addEventListener("click", editItem)
  edits[i].addEventListener("click", function (e) {
    getFormValue(e);
    editItem(i, e);
  });
}


testli.innerHTML = "ASDFASDAFSDFAD";
