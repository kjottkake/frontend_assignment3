/*TODO: 
  [x]How to use foreach
  []Add new elements to html using javascript
    []Add Buttons
    [x]Add new text
    []add button functionality
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


let tasks = ["Walk Cat", "Walk Dog", "Walk Emu", "Talk to Emu", "Drink some beers", "Lift some weights or something"]


/* Adds task to array function */
let addTask = () =>{
    tasks.push(getData());
    console.log(tasks);
}


//Creates elements from array
let populateList = (t) =>{
  const newLi = document.createElement("li");
  const newLiContent = document.createTextNode(t);
  newLi.appendChild(newLiContent);

  //creating new button
  const button = document.createElement("button");

  button.innerText = "Editbra!";
  button.className = "edit";

  newLi.appendChild(button);

  const currentDiv = document.getElementById("ulthingie");
  //adds element
  currentDiv.append(newLi);
}

// let items = ["item1", "item2", "item3"]


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





/* Gets Data from FORM */
let getData = () => {
    let newTask = data.value;
    console.log("Data Value: " + newTask);
    // populateList();
    return newTask;
}

/* Calls on eventListener for click event */
form.addEventListener("click", addTask)

testli.innerHTML = "ASDFASDAFSDFAD";

