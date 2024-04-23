import { Entry, Task, Project, ListMethods, taskList, projectList, filterList } from "./logics";
//import { renderInitialScreen } from './DOMstuff';
import './style.css';


//I'm going to do the DOMstuff here (from here to the commented dashed line), then all of this should be
//moved to DOMstuff.js, exported there and imported back here.

const mainLabel = document.querySelector('.main-label');

const addTaskBtn = document.querySelector('.add-task');
const addProjectBtn = document.querySelector('.add-project');

const tasksContainer = document.querySelector('.tasks-container');
const projectsSubContainer = document.querySelector('.projects-subcontainer');

const filtersContainer = document.querySelector('.filters-container');

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

        updateTasks(mainLabel.getAttribute('viewMode'));

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
        updateProjects();
    }
});


function assingProjectValues(p) {
    p.setName(document.querySelector('input[name=project-name]').value);
}

function assingTaskValues(t) {
    t.setName(document.querySelector('input[name=task-name]').value);
    t.setDescription(document.querySelector('input[name=description]').value);
    t.setDate(document.querySelector('input[name=date]').value);
    t.setProjectID(document.querySelector('select[name=projectSelect]').getAttribute('projectID'));
}

function createProjectElement(p) {
    const project = document.createElement("div");
    project.classList.add("project");
    project.setAttribute("projectID", p.id);
    project.addEventListener('click', () => {
        openProjectView(p);
    });

    const projectName = document.createElement("div");
    projectName.classList.add("project-name");
    projectName.textContent = p.name;


    const contextMenu = document.createElement("div");
    contextMenu.classList.add("context-menu");

    project.appendChild(projectName);
    project.appendChild(contextMenu);

    projectsSubContainer.appendChild(project);
}

function createFilterElement(f) {
    const filter = document.createElement("div");
    filter.classList.add("filter");
    filter.setAttribute("name", f.name);
    filter.addEventListener('click', () => {
        openFilterView(f);
    });

    const filterName = document.createElement("div");
    filterName.classList.add("filter-name");
    filterName.textContent = f.name;

    filter.appendChild(filterName);

    filtersContainer.appendChild(filter);
}

function openProjectView(prj) { //posso remover isso, mesclando direto com o 
//renderMainContent (talvez "showTasks? algo assim?")
//de maneira que possa usar a mesma função pra project e filter

    renderMainContent('project', prj);
}

function renderMainContent(viewMode, arg) {
    mainLabel.textContent = arg.name;
    mainLabel.setAttribute('viewMode', viewMode);
    mainLabel.setAttribute('prjOrFilterID', arg.id);
    updateTasks(viewMode, arg);
}

function getTasksToShow(viewMode, arg) {
    if (viewMode === 'project') {
        return taskList.getList().filter((t) => t.projectID === arg.id);
    }

    else if (viewMode === 'filter') {
        return ;
    }
}

function updateTasks(viewMode, arg) {

    if (!arg) {
        if (viewMode === 'project') {
            arg = projectList.getList().find((p) => p.id === mainLabel.getAttribute('prjOrFilterID'));
        }

        else if (viewMode === 'filter') {

        }
    }

    let tasks = getTasksToShow(viewMode, arg);


    //remove any content from container
    tasksContainer.replaceChildren();

    //add tasks as elements
    tasks.forEach((t) => createTaskElement(t, viewMode));

}



function createTaskElement(t, viewMode) {

    const task = document.createElement("div");
    task.classList.add("task");
    task.setAttribute("taskID", t.id);
    task.setAttribute("projectID", t.projectID);

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

    if (viewMode === 'filter') {
        const project = document.createElement("div");
        project.classList.add("project");
        project.textContent = t.project;
    }

    const urgent = document.createElement("div");
    urgent.classList.add("urgent");

    const contextMenu = document.createElement("div");
    contextMenu.classList.add("context-menu");

    task.appendChild(checkbox);
    task.appendChild(taskText);
    task.appendChild(date);
    if (viewMode === 'filter') { task.appendChild(project) };
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

        //create and append options on select element
        const projectOptions = createProjectOptions(projectSelect);
        projectOptions.forEach(x => projectSelect.appendChild(x));

        //set the select element's projectID attribute to be the same as the selected option's
        const opt = projectSelect.options;
        projectSelect.setAttribute('projectID', opt[opt.selectedIndex].getAttribute('projectID'));
        projectSelect.addEventListener("change", (e) => {
            projectSelect.setAttribute('projectID', opt[opt.selectedIndex].getAttribute('projectID'));
        });

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

function createProjectOptions(parent) {
    const list = projectList.getList();
    const options = [];

    list.forEach(p => {
        options[list.indexOf(p)] = document.createElement('option');
        options[list.indexOf(p)].setAttribute ('projectID', p.id);
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

function renderFilters() {
    //filtersContainer.replaceChildren();
    filterList.getList().forEach((f) => createFilterElement(f));
}

function updateProjects() {

    //remove any content from container
    projectsSubContainer.replaceChildren();

    //add projects from projectList as elements
    projectList.getList().forEach((p) => createProjectElement(p));

}

let p1 = projectList.createProject();
p1.setName('project 1');
let p2 = projectList.createProject();
p2.setName('project 2');
let t1 = taskList.createTask();
let t2 = taskList.createTask();
t1.setName('task from project 1');
t1.setProjectID(p1.id);
t2.setName('task from project 2');
t2.setProjectID(p2.id);
console.log(projectList.getList());
console.log(taskList.getList());

renderFilters();
updateProjects();


console.log(filterList.getList());


//-------------------------------- end of DOMstuff -----------------------------------------------//