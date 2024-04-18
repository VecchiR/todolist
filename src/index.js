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

    else if (e.target.type === 'submit') {
        e.preventDefault();
        let newTask = taskList.createTask();
        assingTaskValues(newTask);
        createTaskElement(newTask);
        removeForm(tasksContainer);
    }
});

projectsSubContainer.addEventListener('click', (e) => {
    if (e.target.type === 'button') {
        removeForm(projectsSubContainer);
    }

    else if (e.target.type === 'submit') {
        e.preventDefault();
        let newProject = projectList.createProject();
        assingProjectValues(newProject);
        createProjectElement(newProject);
        removeForm(projectsSubContainer);
    }
});


function assingProjectValues(p) {
    p.setName(document.querySelector('input[name=project-name]').value);
}

function assingTaskValues(t) {
    t.setName(document.querySelector('input[name=task-name]').value);
    t.setDescription(document.querySelector('input[name=description]').value);
    t.setDate(document.querySelector('input[name=date]').value);
    t.setProject(document.querySelector('select[name=projectSelect]').value);
}

function createProjectElement(p) {
    const project = document.createElement("div");
    project.classList.add("project");
    project.setAttribute("projectID", p.id);

    const projectName = document.createElement("div");
    projectName.classList.add("project-name");
    projectName.textContent = p.name;


    const contextMenu = document.createElement("div");
    contextMenu.classList.add("context-menu");

    project.appendChild(projectName);
    project.appendChild(contextMenu);

    projectsSubContainer.appendChild(project);   
}

function createTaskElement(t) {

    const task = document.createElement("div");
    task.classList.add("task");
    task.setAttribute("taskID", t.id);

    const checkbox = document.createElement("div");
    checkbox.classList.add("checkbox");

    const taskText = document.createElement("div");
    taskText.classList.add("task-text");

    const taskName = document.createElement("div");
    taskName.classList.add("task-name");
    taskName.textContent = t.name;

    const taskDescription = document.createElement("div");
    taskDescription.classList.add("task-description");
    taskDescription.textContent = t.description;

    taskText.appendChild(taskName);
    taskText.appendChild(taskDescription);

    const date = document.createElement("div");
    date.classList.add("date");
    date.textContent = t.date;

    const project = document.createElement("div");
    project.classList.add("project");
    project.textContent = t.project;

    const urgent = document.createElement("div");
    urgent.classList.add("urgent");

    const contextMenu = document.createElement("div");
    contextMenu.classList.add("context-menu");

    task.appendChild(checkbox);
    task.appendChild(taskText);
    task.appendChild(date);
    task.appendChild(project);
    task.appendChild(urgent);
    task.appendChild(contextMenu);

    tasksContainer.appendChild(task);

}


function removeForm(container) {
    container.querySelector('form').remove();
}

function createTaskForm() {
    let taskHasForm = tasksContainer.querySelector("form") != null;
    let prjHasForm = projectsSubContainer.querySelector("form") != null;


    if (taskHasForm === false) {
        if (prjHasForm) { projectsSubContainer.querySelector("form").remove(); }
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

        const projectSelect = document.createElement("select");
        projectSelect.name = "projectSelect";
        projectSelect.id = "projectSelect";
        const projectOptions = createProjectOptions();
        projectOptions.forEach(x => projectSelect.appendChild(x));

        const submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.textContent = "Add";

        const cancelButton = document.createElement("button");
        cancelButton.type = "button";
        cancelButton.textContent = "Cancel";

        form.appendChild(taskNameInput);
        form.appendChild(descriptionInput);
        form.appendChild(dateInput);
        form.appendChild(projectSelect);
        form.appendChild(submitButton);
        form.appendChild(cancelButton);

        tasksContainer.appendChild(form);
    }
}

function createProjectOptions() {
    const list = projectList.getList();
    const options = [];

    list.forEach(p => {
        options[list.indexOf(p)] = document.createElement('option');
        options[list.indexOf(p)].prjID = p.id;
        options[list.indexOf(p)].textContent = p.name;
    });

    return options;
}

function createProjectForm() {
    let prjHasForm = projectsSubContainer.querySelector("form") != null;
    let taskHasForm = tasksContainer.querySelector("form") != null;


    if (prjHasForm === false) {
        if (taskHasForm) { tasksContainer.querySelector("form").remove(); }
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

projectList.createProject();
projectList.getList()[0].name = 'project 1';
projectList.createProject();
projectList.getList()[1].name = 'project 2';

//-------------------------------- end of DOMstuff -----------------------------------------------//