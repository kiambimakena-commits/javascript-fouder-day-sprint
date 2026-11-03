
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {
       
        const listItem = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", function() {
            tasks[index].completed = checkbox.checked;
            saveTasks();
            displayTasks();
        });

        const taskText = document.createElement("span");
        taskText.textContent = task.text + " ";

        if (task.completed) {
            taskText.style.textDecoration = "line-through";
        }

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {
            tasks.splice(index, 1);
            saveTasks();
            displayTasks();
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(taskText);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    });

} const completedCount = tasks.filter(function(task) {
    return task.completed;
}).length;

taskCounter.textContent =
    "Total tasks: " + tasks.length +
    " | Completed: " + completedCount;

addButton.addEventListener("click", function() {
    const text = taskInput.value.trim();

    if (text === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        text: text,
        completed: false
    });

    saveTasks();
    displayTasks();

    taskInput.value = "";
    taskInput.focus();
});

displayTasks();

console.log("Starting the task...");

const myPromise = new Promise(function(resolve, reject) {
    resolve("The task was successful!");
});

myPromise.then(function(result) {
    console.log(result);
});

console.log("The program continues...");
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(function(response) {
        return response.json();
    })
    .then(function(todo) {
        console.log("Task title:", todo.title);
        console.log("Completed:", todo.completed);
    })
    .catch(function(error) {
        console.log("Error:", error);
    });
    async function getTodo() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        const todo = await response.json();

        console.log("Task title:", todo.title);
        console.log("Completed:", todo.completed);

    } catch (error) {
        console.log("Error:", error);
    }
}

getTodo();
async function getUser() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        const user = await response.json();

        console.log("User name:", user.name);
        console.log("Email:", user.email);
        console.log("City:", user.address.city);

    } catch (error) {
        console.log("Error:", error);
    }
}

getUser();
async function checkWebsite() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/invalid"
        );

        if (!response.ok) {
            throw new Error("Something went wrong!");
        }

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log("Error message:", error.message);
    }
}

checkWebsite();
