//? Created a variable for the textbox(input).
let userInput = document.getElementById("taskInput");

//* Created a variable for the add task button
let addTaskButton = document.querySelector("#addTaskBtn");

//* created a variable for the ul list
let taskList = document.getElementById("taskList");

// //* Checks the input of the textbox
// userInput.addEventListener("input", () => {
//     let input = userInput.value
//     console.log(input)
// })

//? This function adds a new input textbox with a checkmark every time the add task button is clicked
function addNewTask() {
    //* task list items being created
    //* adding class names to newly created li items
    //* append new li elements to the existing UL
    let newListItem = document.createElement("li");
    newListItem.classList.add("list-group-item")
    newListItem.classList.add("task-item")
    newListItem.classList.add("d-flex")
    taskList.append(newListItem);
    
    //* creating new input element and changing the type for the new input elements to checkbox.
    //* adding class names to the newly created input elements
    //* adding new input to the new li items
    let newTaskTextbox = document.createElement("input");
    newTaskTextbox.type = "checkbox";
    newTaskTextbox.classList.add("form-check-input");
    newListItem.append(newTaskTextbox);

    newTaskTextbox.addEventListener("input", () => {
        if (newTaskTextbox.checked == true) {
            newListItem.style.backgroundColor = "Grey"
            newText.classList.add("strikeThrough")
        } else {
            newText.classList.remove("strikeThrough");
            newListItem.style.backgroundColor = "white";
        }
    });
    
    //* creating new p elements
    //* appending those p elements to the lists
    let newText = document.createElement("p");
    newListItem.append(newText);
    newText.innerHTML = userInput.value;

    clearInput()
}

//? This function clears the input
function clearInput() {
    userInput.value = "";
};

//* Button comes to life with functionality
addTaskButton.addEventListener("click", addNewTask);


