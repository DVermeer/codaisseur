console.log("Welcome ToDo");
const listItems = document.querySelectorAll("li");
console.log(`We have ${listItems.length} list items on this page`);

function createTodo(title) {
  // create a label
  const label = document.createElement("label");
  // create a checkbox
  const cb = document.createElement("input");
  cb.type = "checkbox";
  cb.onclick = "updateCounters()";

  // add the "change" event listener to the checkbox

  // create a text node with the given title
  var labelText = document.createTextNode(title);
  // and append the text node to the label
  label.appendChild(labelText);

  // create a list item
  const listItem = document.createElement("li");
  // and append the checkbox and label to list item
  listItem.appendChild(cb);
  listItem.appendChild(labelText);
  // append the list item to the todo list
  const list = document.getElementById("todoList");
  list.appendChild(listItem);
}

document
  .querySelector("form")
  .addEventListener("submit", function addNewTodo(event) {
    event.preventDefault();

    var data = document.getElementById("newToDo").value;
    console.log(data);
    createTodo(data);
    document.getElementById("newToDo").value = "";
    updateCounters();
  });

function updateCounters() {
  // declare a variable that contains the "Total" counter element
  var totalCount = document.querySelectorAll("li");
  console.log("Total Amount: " + totalCount.length);
  document.getElementById("totalCounter").innerText = totalCount.length;
  // declare a variable that contains the number of todos, by counting how many elements have a specific classname / attribute
  var countDone = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  ).length;
  console.log("Done: " + countDone);
  var countToDo = totalCount.length - countDone;
  console.log("To Do: " + countToDo);
  // update the HTML inside the counter element with the number of todos
  document.querySelector(".totalCounter");
  document.getElementById("todoCounter").innerText = countToDo;
  document.getElementById("doneCounter").innerText = countDone;
}
updateCounters();
