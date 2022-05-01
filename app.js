/*Selects various dom elements*/
let form = document.querySelector("#addItem");
let data = document.querySelector("#task");
let testli = document.querySelector("#testli"); 


let tasks = ["Walk Cat", "Walk Dog", "Walk Emu"]


/* Adds task to array function */
let addTask = () =>{
    tasks.push(getData());
    console.log(tasks);
}



/*Need to create a new element using createElement */
let addElement = () => {
  console.log("addElement function functional");
  const newInput = document.createElement("li");
  const newContent = document.createTextNode("Hi, How are ya!");
  newInput.appendChild(newContent);

  const currentDiv = document.getElementById("ulthingie");\
  //adds element
  currentDiv.append(newInput);
}





/* Gets Data from FORM */
let getData = () => {
    let newTask = data.value;
    console.log("Data Value: " + newTask);
    return newTask;
}

/* Calls on eventListener for click event */
form.addEventListener("click", addTask)

testli.innerHTML = "ASDFASDAFSDFAD";

