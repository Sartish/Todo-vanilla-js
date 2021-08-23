// selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const completeButton = document.querySelector(".complete-btn");
const filterOption = document.querySelector(".filter-todo");

//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

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
  // Add to localstorage
  saveLocalTodos(todoInput.value);
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

//DELETE TODO

function deleteCheck(e) {
  const item = e.target;
  //DELETE
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //Animation
    todo.classList.add("fall");
    todo.addEventListener("transitioned", function () {
      todo.remove();
    });
  }

  //CHECK MARK
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    console.log("checked");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  //loop over our todos, to get access to each individual todo
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  localStorage.setItem("todos", JSON.stringify(todos));
}
function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    //Create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create list
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";
    //Create Completed Button
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
  });
}
