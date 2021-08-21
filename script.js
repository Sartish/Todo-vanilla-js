// selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//event listeners
todoButton.addEventListener("click", addTodo);

//Functions;
function addTodo(event) {
  // prevent form from submitting
  event.preventDefault();
  console.log("hello");
  // Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // Create Li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  //styled in css
  newTodo.classList.add("todo-item");
  //append child to the todoDiv
  todoDiv.appendChild(newTodo);
  //checkmarkbutton completed
  const completedButton = document.createElement("button");
  completedButton.innerHTML = "<p>complete</p>";
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //checkmarkbutton trash
  const trashButton = document.createElement("button");
  trashButton.innerHTML = "<p>trash</p>";
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //append to list
  todoList.appendChild(todoDiv);
  // clear todoinput value
  todoInput.value = "";
}
