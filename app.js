console.log("Welcome ToDo")

document.getElementById("addToDo").onsubmit = function() {addToDo()};

function addToDo(newToDo){
    console.log("Add new ToDo:" + newToDo)
}