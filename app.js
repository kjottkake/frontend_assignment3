// selects items of the DOM
let add = document.getElementById("addItem")

//adding function for adding item to list
let addTask = function() {
  console.log("Added Item!");
}

let test = function(){
    console.log("test!");
}


//uses addEventListenr from General implementation considerations
add.addEventListener("click", addTask);