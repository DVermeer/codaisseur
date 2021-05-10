console.log("Welcome ToDo")

document.getElementById("addToDo").innerHTML.onsubmit = function() {addToDo()};

function addToDo(newToDo){
    console.log("Add new ToDo:" + newToDo)
}