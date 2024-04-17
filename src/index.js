import { Entry, Task, Project, ListMethods, taskList, projectList } from "./logics";
import { renderInitialScreen } from './DOMstuff';
import './style.css';


//I'm going to do the DOMstuff here (from here to the commented dashed line), then all of this should be
//moved to DOMstuff.js, exported there and imported back here.

const addTaskBtn = document.querySelector('.add-task');
const addProjectBtn = document.querySelector('.add-project');

const tasksContainer = document.querySelector('.tasks-container');
const projectsSubContainer = document.querySelector('.projects-subcontainer');

addTaskBtn.addEventListener('click', createTaskForm);
addProjectBtn.addEventListener('click', createProjectForm);

tasksContainer.addEventListener('click', (e) => {
    if (e.target.type === 'button') {
        removeForm(tasksContainer);
    }
})

projectsSubContainer.addEventListener('click', (e) => {
    if (e.target.type === 'button') {
        removeForm(projectsSubContainer);
    }
})

function removeForm(container) {
    container.querySelector('form').remove();
}

function createTaskForm() {
    let taskHasForm = tasksContainer.querySelector("form") != null;
    let prjHasForm = projectsSubContainer.querySelector("form") != null;


    if (taskHasForm === false) {
        if (prjHasForm) {projectsSubContainer.querySelector("form").remove();}
        const form = document.createElement("form");
        form.classList.add("task-form")
        form.setAttribute("autocomplete", "off");

        const taskNameInput = document.createElement("input");
        taskNameInput.type = "text";
        taskNameInput.name = "task-name";
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
    let prjHasForm = projectsSubContainer.querySelector("form") != null;
    let taskHasForm = tasksContainer.querySelector("form") != null;


    if (prjHasForm === false) {
        if (taskHasForm) {tasksContainer.querySelector("form").remove();}
        const form = document.createElement("form");
        form.classList.add("project-form")
        form.setAttribute("autocomplete", "off");

        const projectNameInput = document.createElement("input");
        projectNameInput.type = "text";
        projectNameInput.name = "project-name";
        projectNameInput.placeholder = "Enter project name";

        const submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.textContent = "Add";

        const cancelButton = document.createElement("button");
        cancelButton.type = "button";
        cancelButton.textContent = "Cancel";

        form.appendChild(projectNameInput);
        form.appendChild(submitButton);
        form.appendChild(cancelButton);

        projectsSubContainer.appendChild(form);
    }
}



//-------------------------------- end of DOMstuff -----------------------------------------------//