import { Entry, Task, Project, ListMethods, taskList, projectList } from "./logics";
import { renderInitialScreen } from './DOMstuff';
import './style.css';


//I'm going to do the DOMstuff here (from here to the commented dashed line), then all of this should be
//moved to DOMstuff.js, exported there and imported back here.

const addTaskBtn = document.querySelector('.add-task');
const addProjectBtn = document.querySelector('.add-project');

const tasksContainer = document.querySelector('.tasks-container');
const projectsContainer = document.querySelector('.projects-container');

addTaskBtn.addEventListener('click', createTaskForm);
addProjectBtn.addEventListener('click', createProjectForm);

function createTaskForm() {
    let hasForm = tasksContainer.querySelector("form") != null;

    if (hasForm === false) {
        const form = document.createElement("form");
        form.setAttribute("autocomplete", "off");

        const taskNameInput = document.createElement("input");
        taskNameInput.type = "text";
        taskNameInput.name = "task";
        taskNameInput.placeholder = "Enter task name";

        const descriptionInput = document.createElement("input");
        descriptionInput.type = "text";
        descriptionInput.name = "description";
        descriptionInput.placeholder = "Enter task description (optional)";

        const dateInput = document.createElement("input");
        dateInput.type = "date";
        dateInput.name = "date";
        dateInput.id = "date";

        const submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.textContent = "Add";

        const cancelButton = document.createElement("button");
        cancelButton.type = "button";
        cancelButton.textContent = "Cancel";

        form.appendChild(taskNameInput);
        form.appendChild(descriptionInput);
        form.appendChild(dateInput);
        form.appendChild(submitButton);
        form.appendChild(cancelButton);

        tasksContainer.appendChild(form);
    }
}


function createProjectForm() {

}


//-------------------------------- end of DOMstuff -----------------------------------------------//