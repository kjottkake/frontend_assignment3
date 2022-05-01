let form = document.getElementById("addItem");
let data = document.getElementById("task");

let tasks = ["Walk Cat", "Walk Dog", "Walk Emu"]


/* Adds task to array function */
let addTask = () =>{
    tasks.push(getData());
    console.log(tasks);
}


/* Gets Data from FORM */
let getData = () => {
    let newTask = data.value;
    console.log("Data Value: " + newTask);
    return newTask;
}

/* Calls on eventListener for click event */
form.addEventListener("click", addTask)


