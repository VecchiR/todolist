import { taskList, projectList, filterList } from "./logics";
//import { renderInitialScreen } from './DOMstuff';
import './style.css';
import { add, format, isEqual } from "date-fns";



//I'm going to do the DOMstuff here (from here to the commented dashed line), then all of this should be
//moved to DOMstuff.js, exported there and imported back here.

const mainLabel = document.querySelector('.main-label');

const addTaskBtn = document.querySelector('.add-task');
const addProjectBtn = document.querySelector('.add-project');

const tasksContainer = document.querySelector('.tasks-container');
const projectsSubContainer = document.querySelector('.projects-subcontainer');

const filtersContainer = document.querySelector('.filters-container');

addTaskBtn.addEventListener('click', () => {
    createTaskForm(mainLabel.getAttribute('viewMode'));
});

addProjectBtn.addEventListener('click', createProjectForm);

tasksContainer.addEventListener('click', (e) => {
    if (e.target.type === 'button') {
        removeForm(tasksContainer);
    }

    else if (e.target.type === 'submit') {
        e.preventDefault();
        if (document.querySelector('input[name=task-name]').value) {
            let newTask = taskList.createTask();
            assingTaskValues(newTask);
            updateTasks();
        }
    }
});

projectsSubContainer.addEventListener('click', (e) => {
    if (e.target.type === 'button') {
        removeForm(projectsSubContainer);
    }

    else if (e.target.type === 'submit') {
        e.preventDefault();
        if (document.querySelector('input[name=project-name]').value) {
            let newProject = projectList.createProject();
            assingProjectValues(newProject);
            updateProjects();
        }
    }
});


function assingProjectValues(p) {
    p.setName(document.querySelector('input[name=project-name]').value);
}

function assingTaskValues(t) {
    t.setName(document.querySelector('input[name=task-name]').value);
    t.setDescription(document.querySelector('input[name=description]').value);
    t.setDate(document.querySelector('input[name=date]').valueAsDate);
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
    contextMenu.classList.add("context-menu-button");
    contextMenu.addEventListener('click', (e) => {
        if (document.querySelector('.context-menu')) {
            document.querySelector('.context-menu').remove();
        }
        openContextMenu(p, project, e);
    });

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

function openFilterView(filter) { //posso remover isso, mesclando direto com o 
    //renderMainContent (talvez "showTasks? algo assim?")
    //de maneira que possa usar a mesma função pra project e filter

    renderMainContent('filter', filter);
}

function renderMainContent(viewMode, arg) {
    mainLabel.textContent = arg.name;
    mainLabel.setAttribute('viewMode', viewMode);
    if (viewMode === 'project') {
        mainLabel.setAttribute('prjOrFilterID', arg.id);
    }
    else if (viewMode === 'filter') {
        mainLabel.setAttribute('prjOrFilterID', arg.name);
    }
    updateTasks(viewMode, arg);
}

function getTasksToShow(viewMode, arg) {
    if (viewMode === 'project') {
        return taskList.getList().filter((t) => t.projectID === arg.id);
    }

    else if (viewMode === 'filter') {
        return arg.filterTasks();
    }
}

function updateTasks(viewMode, arg) {

    if (!viewMode) {
        viewMode = mainLabel.getAttribute('viewMode');
    }

    if (!arg) {
        if (viewMode === 'project') {
            arg = projectList.getList().find((p) => p.id === mainLabel.getAttribute('prjOrFilterID'));
        }

        else if (viewMode === 'filter') {
            arg = filterList.getList().find((f) => f.name === mainLabel.getAttribute('prjOrFilterID'));
        }
    }

    let tasks = getTasksToShow(viewMode, arg);


    //remove any content from container
    tasksContainer.replaceChildren();

    (tasks.length === 0 && viewMode === 'filter') ? //check if there are tasks to show
        noTasksToShow() : //If not, write that there aren't any
        tasks.forEach((t) => createTaskElement(t, viewMode)); //if yes, render them 
}


function noTasksToShow() {
    const text = document.createElement("div");
    text.classList.add("no-tasks-text");
    text.textContent = 'Nothing to show here!'

    tasksContainer.appendChild(text);
}



function createTaskElement(t, viewMode) {

    const task = document.createElement("div");
    task.classList.add("task");
    task.setAttribute("taskID", t.id);
    task.setAttribute("projectID", t.projectID);

    const checkbox = document.createElement("div");
    checkbox.classList.add("checkbox");
    if (t.complete) { toggleSelected(checkbox); }
    checkbox.addEventListener('click', () => {
        t.setCompleted();
        updateTasks();
    });

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

    let project;

    if (viewMode === 'filter') {
        project = document.createElement("div");
        project.classList.add("project");
        project.textContent = getTaskProjectName(t);
    }

    const important = document.createElement("div");
    important.classList.add("important");
    if (t.important) { toggleSelected(important); }
    important.addEventListener('click', (e) => {
        t.setImportant();
        updateTasks();
    });

    const contextMenu = document.createElement("div");
    contextMenu.classList.add("context-menu-button");
    contextMenu.addEventListener('click', (e) => {
        if (document.querySelector('.context-menu')) {
            document.querySelector('.context-menu').remove();
        }
        openContextMenu(t, task, e);


    });

    task.appendChild(checkbox);
    task.appendChild(taskText);
    task.appendChild(date);
    if (viewMode === 'filter') { task.appendChild(project) };
    task.appendChild(important);
    task.appendChild(contextMenu);

    tasksContainer.appendChild(task);

}

function toggleSelected(icon) {
    icon.classList.toggle("selected");
}



function openContextMenu(obj, element, e) {

    const ctxMenu = document.createElement('div');
    ctxMenu.classList.add('context-menu');
    const ctxEdit = document.createElement('div');
    ctxEdit.textContent = "Edit";
    const ctxDelete = document.createElement('div');
    ctxDelete.textContent = "Delete";

    ctxMenu.appendChild(ctxEdit);
    ctxMenu.appendChild(ctxDelete);
    element.appendChild(ctxMenu);

    document.addEventListener('click', function (event) {
        if (event.target === ctxEdit) {
            console.log('edit me');
        }

        else if (event.target === ctxDelete) {
            console.log('delete me');
        }
        ctxMenu.remove();

    }, { once: true });

    e.stopPropagation();
}


function getTaskProjectName(t) {
    let foundProject = projectList.getList()[projectList.getList().findIndex((p) => p.id === t.projectID)];
    return foundProject ? foundProject.name : '';
}

function removeForm(container) {
    container.querySelector('form').remove();
}

function createTaskForm(viewMode) {
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
        const projectOptions = createProjectOptions();
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

function createProjectOptions() {
    const list = projectList.getList();
    const options = [];

    options[0] = document.createElement('option');
    options[0].setAttribute('projectID', '');
    options[0].textContent = '';

    list.forEach(p => {
        options[(list.indexOf(p)) + 1] = document.createElement('option');
        options[(list.indexOf(p)) + 1].setAttribute('projectID', p.id);
        options[(list.indexOf(p)) + 1].textContent = p.name;
        if (options[(list.indexOf(p)) + 1].getAttribute('projectID') === mainLabel.getAttribute('prjOrFilterID')) {
            options[(list.indexOf(p)) + 1].selected = true;
        }
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
/*
console.log('projectList at start: ', projectList.getList());
console.log('taskList at start: ', taskList.getList());
*/

function test(t) {
    let now = new Date();
    let today = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
    let next8days = add(today, { days: 8 });
    console.log({
        filteredList: filterList.getList()[filterList.getList().findIndex((x) => x.name === 'Today')].filterTasks(),
        now: now,
        today: today,
        next8days: next8days,
        isTaskDateEqualToTOday: isEqual(t.date, today),
    });
}

renderFilters();
updateProjects();
openFilterView(filterList.getList()[filterList.getList().findIndex((x) => x.name === 'All Tasks')]);



//-------------------------------- end of DOMstuff -----------------------------------------------//