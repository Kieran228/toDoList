//? Created a variable for the textbox(input).
let userInput = document.getElementById("taskInput");

//* Created a variable for the add task button
let addTaskButton = document.querySelector("#addTaskBtn");

// let listItems = document.getElementById("")
// let firstItemText = document.createElement("p")
// listItems.append(firstItemText);
// firstItemText.innerHTML = userInput.value


let taskList = document.getElementById("taskList");

// //* Checks the input of the textbox
// userInput.addEventListener("input", () => {
//     let input = userInput.value
//     console.log(input)
// })

function addNewTask() {
    //* task list items being created
    //* adding class names to newly created li items
    //* append new li elements to the existing UL
    let newListItem = document.createElement("li");
    newListItem.classList.add("list-group-item")
    newListItem.classList.add("task-item")
    newListItem.classList.add("d-flex")
    taskList.append(newListItem);
    
    //* creating new input element and changing the type for the new input element.
    //* adding class names to the newly created input elements
    //* adding new input to the new li items
    newTaskTextbox = document.createElement("input");
    newTaskTextbox.type = "checkbox";
    newTaskTextbox.classList.add("form-check-input");
    newListItem.append(newTaskTextbox);
    
    //* creating new p elements
    //* appending those p elements to the lists
    let newText = document.createElement("p");
    newListItem.append(newText);
    // listItems.innerHTML = userInput.value;
    newText.innerHTML = userInput.value;

    clearInput()
}

function clearInput() {
    userInput.value = "";
};

addTaskButton.addEventListener("click", addNewTask);


