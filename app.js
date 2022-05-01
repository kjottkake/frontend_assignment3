let form = document.querySelectorAll(".task");
let testli = document.querySelector("#testLi");
let testp = document.querySelector("#testp");

//Create a array of all items currently in list.
let currentList = ["Walk dog", "Sleep"];

/*Function for getting data from Form*/
let getData = () => {
  let dataValue = newTask.value;
  console.log("inpuuted data: " + dataValue);
}

testli.innerHTML = currentList[1];
function test() {
testp.innerHTML = "lol this is a test!";
}

test();

