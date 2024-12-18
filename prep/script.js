

var todoListElement = document.getElementById("todo-list");
let addInput = document.getElementById("add-input");
let addButton = document.getElementById("add-button");


let idCounter = 0;


function addTask(task) {
    let taskElement = getTaskElement(task)
    todoListElement.appendChild(taskElement)
}

function removeTask(taskElement) {
    todoListElement.removeChild(taskElement)
}

function getTaskElement(task) {
    let li = document.createElement("li")
    li.classList.add("task");

    let input = document.createElement("input");
    input.type = "checkbox";

    li.appendChild(input);

    let span = document.createElement("span");
    span.innerHTML = task;

    li.appendChild(span);

    const button = document.createElement("button");
    button.innerHTML = "x";
    button.addEventListener("click", function() {
        removeTask(li);
    })

    li.appendChild(button);

    return li;
}




function onAddClick() {
    if (!addInput.value) return;

    addTask(addInput.value)
    addInput.value = "";
}


addButton.addEventListener("click", onAddClick);