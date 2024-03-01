"use strict";
const taskInput = document.getElementById("task");
const addButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
let taskArray = [];
addButton.addEventListener("click", () => {
    const task = taskInput.value;
    if (task.length > 0) {
        taskArray.push(task);
        displayTask();
        taskInput.value = "";
    }
});
const displayTask = () => {
    let listHtml = "";
    for (let i = 0; i < taskArray.length; i++) {
        listHtml += `<li class="task-list"> ${taskArray[i]}<button class="delete-task" id="delete-task" type="button" onclick="deleteTask(${i})">Delete</button> <button class="edit-task" type="button" onclick="editTask(${i})">Edit</button> </li>`;
    }
    taskList.innerHTML = listHtml;
    console.log(taskArray);
};
const deleteTask = (e) => {
    taskArray.splice(e, 1);
    displayTask();
};
const editTask = (e) => {
    let newTask = prompt("Edit Task", taskArray[e]);
    if (newTask != null) {
        taskArray[e] = newTask;
        displayTask();
    }
    ;
};
