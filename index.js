//? Created a variable for the textbox.
let userInput = document.getElementById("taskInput");
let addTaskButton = document.querySelector("#addTaskBtn");
let taskDisplay = document.querySelectorAll(".display p");


//* Checks the input of the textbox
userInput.addEventListener("input", () => {
    let input = userInput.value
    console.log(input)
})

//todo Display the tasks input by the user to the task list below it
//todo Make it to where a new list item is added every time add task button is clicked
addTaskButton.addEventListener("click", () => {
    for (let i = 0; i < taskDisplay.length; i++) {
        let input = userInput.value;
        //* template for creating task lists.
        taskDisplay[i].innerHTML = input;
    }
    clearInput()
});

function clearInput() {
    userInput.value = "";
}
