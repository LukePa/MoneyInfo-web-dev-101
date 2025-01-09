

const todoListElement = document.getElementById ("todo-list")
const fetchbutton = document.getElementById ("add-button")
const taskTextInput = document.getElementById("add-input");

function addtask () {
    const element = createtaskelement(taskTextInput.value);
    todoListElement.appendChild(element);
}



fetchbutton.addEventListener("click", function (e) {
    addtask();
    taskTextInput.value = "" 
})

function createtaskelement (tasktext) {
    const listElement = document.createElement("li");
    listElement.classList.add("task");

    const inputElement = document.createElement("input");
    inputElement.type = "checkbox"    
    listElement.appendChild(inputElement);

    const spanElement = document.createElement("span");
    spanElement.innerHTML = tasktext;
    listElement.appendChild(spanElement);

    const removeButton = document.createElement("button");
    removeButton.innerHTML = "x"
    removeButton.addEventListener("click", function(e) {
        todoListElement.removeChild(listElement)
    })
    listElement.appendChild(removeButton)

    

    return listElement;
}


