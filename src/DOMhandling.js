import { taskList, projectList, filterList } from "./logic";
import { storeListsLocally } from "./localstorage";
import { filtersContainer, projectsSubContainer, mainLabel, tasksContainer } from "./index";
import { formatISO } from "date-fns";
import incompleteIcon from "./icons/incomplete.svg";
import completeIcon from "./icons/complete.svg";
import unimportantIcon from "./icons/unimportant.svg";
import importantIcon from "./icons/important.svg";
import contextIcon from "./icons/context.svg";


export function assingProjectValues(p) {
    p.setName(document.querySelector('input[name=project-name]').value);
}

export function assingTaskValues(t) {
    t.setName(document.querySelector('input[name=task-name]').value);
    t.setDescription(document.querySelector('input[name=description]').value);
    t.setDate(document.querySelector('input[name=date]').valueAsDate);
    t.setProjectID(document.querySelector('select[name=projectSelect]').getAttribute('projectID'));
}

function getTasksToShow(viewMode, arg) {
    if (viewMode === 'project') {
        return taskList.getList().filter((t) => t.projectID === arg.id);
    }

    else if (viewMode === 'filter') {
        return arg.filterTasks();
    }
}

function getTaskProjectName(t) {
    let foundProject = projectList.getList()[projectList.getList().findIndex((p) => p.id === t.projectID)];
    return foundProject ? foundProject.name : '';
}

function createProjectElement(p) {
    const project = document.createElement("div");
    project.classList.add("project");
    project.setAttribute("projectID", p.id);
    project.addEventListener('click', (e) => {
        let ctxOptions = document.querySelectorAll('div.context-menu > div');
        let found = false;
        ctxOptions.forEach((x) => {
            if (x === e.target) {
                found = true;
                return;
            }
        })
        if (!found) {
            renderMainContent('project', p);
            updateSelectedViewTag(project);

        }
    });

    const projectName = document.createElement("div");
    projectName.classList.add("project-name");
    projectName.textContent = p.name;


    const contextMenu = document.createElement("img");
    contextMenu.classList.add("context-menu-button");
    contextMenu.src = contextIcon;
    contextMenu.addEventListener('click', (e) => {
        if (document.querySelector('.context-menu')) {
            document.querySelector('.context-menu').remove();
        }
        openContextMenu(p, project, e);
        if (document.querySelector('form')) {
            document.querySelector('form').remove();
        }
    });

    project.appendChild(projectName);
    project.appendChild(contextMenu);

    projectsSubContainer.appendChild(project);
}

function createFilterElement(f) {
    const filter = document.createElement("div");
    filter.classList.add("filter");
    filter.setAttribute("name", f.name);
    filter.addEventListener('click', (e) => {
        renderMainContent('filter', f);
        updateSelectedViewTag(e.target);
    });
    filter.textContent = f.name;
    filtersContainer.appendChild(filter);
}

export function updateSelectedViewTag(target) {
    document.querySelectorAll(".filter").forEach((f) => f.classList.remove('selected-view'));
    document.querySelectorAll(".projects-subcontainer>.project").forEach((p) => p.classList.remove('selected-view'));

    target.classList.add('selected-view');
}

export function renderMainContent(viewMode, arg) {
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

export function updateTasks(viewMode, arg) {

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

    const checkbox = document.createElement("img");
    checkbox.classList.add("checkbox");

    if (t.complete) {
        toggleSelected(checkbox);
        checkbox.src = completeIcon;
    } else { checkbox.src = incompleteIcon; }

    checkbox.addEventListener('click', () => {
        t.setCompleted();
        updateTasks();
        storeListsLocally();
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
    t.date ? date.textContent = formatISO(t.date, { representation: 'date' }) : '';

    let project;

    if (viewMode === 'filter') {
        project = document.createElement("div");
        project.classList.add("project");
        project.textContent = getTaskProjectName(t);
    }



    const important = document.createElement("img");
    important.classList.add("important");

    if (t.important) {
        toggleSelected(important);
        important.src = importantIcon;
    } else { important.src = unimportantIcon; }

    important.addEventListener('click', (e) => {
        t.setImportant();
        updateTasks();
        storeListsLocally();
    });




    const contextMenu = document.createElement("img");
    contextMenu.src = contextIcon;
    contextMenu.classList.add("context-menu-button");
    contextMenu.addEventListener('click', (e) => {
        if (document.querySelector('.context-menu')) {
            document.querySelector('.context-menu').remove();
        }
        openContextMenu(t, task, e);
        if (document.querySelector('form')) {
            document.querySelector('form').remove();
        }


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
            contextEdit(obj, element);
        }

        else if (event.target === ctxDelete) {
            contextDelete(obj, element);
        }

        ctxMenu.remove();

    }, { once: true });

    e.stopPropagation();
}

function contextEdit(obj, element) {
    if (obj.constructor.name === 'Task') {
        createTaskForm(obj, element);
    }

    else if (obj.constructor.name === 'Project') {
        createProjectForm(obj, element);
    }

}

function contextDelete(obj) {
    if (obj.constructor.name === 'Task') {
        taskList.removeFromList(obj);
        updateTasks();
        storeListsLocally();
    }
    else if (obj.constructor.name === 'Project') {
        let tasksToClean = getTasksToShow('project', obj);
        tasksToClean.forEach((t) => t.setProjectID(''));
        projectList.removeFromList(obj);
        updateProjects();

        //check if the project being deleted is active (if the user is viewing it's tasks)
        if (mainLabel.getAttribute('prjOrFilterID') === obj.id) {
            renderMainContent('filter', filterList.getDefault()); //revert to the default view
            updateSelectedViewTag(document.querySelector(`div[name="${filterList.getDefault().name}"]`));
        } else { updateTasks(); } //"else", otherwise it will update tasks 2x (renderMainContent already update tasks)

        storeListsLocally();
    }
}

export function createTaskForm(existingTask, element) {
    let taskHasForm = tasksContainer.querySelector("form") != null;
    let prjHasForm = projectsSubContainer.querySelector("form") != null;
    console.log('tem que entrar. ');

    // if (taskHasForm === false) {
    console.log('entrei.');
    if (prjHasForm) { projectsSubContainer.querySelector("form").remove(); }

    const form = document.createElement("form");
    form.classList.add("task-form")
    form.setAttribute("autocomplete", "off");
    form.method = 'dialog';
    if (existingTask) { form.setAttribute("existing-task", existingTask.id); }

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
    const projectOptions = createProjectOptions(existingTask);
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


    if (existingTask) {
        taskNameInput.value = existingTask.name;
        if (existingTask.description) { descriptionInput.value = existingTask.description; }
        if (existingTask.date) {
            dateInput.value = formatISO(existingTask.date, { representation: 'date' });
        }
    }

    form.appendChild(taskNameInput);
    form.appendChild(descriptionInput);
    form.appendChild(dateInput);
    form.appendChild(projectSelect);
    form.appendChild(submitButton);
    form.appendChild(cancelButton);

    let dialog = document.querySelector("dialog");
    if (!dialog) {
        dialog = document.createElement('dialog');
    }

    dialog.appendChild(form);
    tasksContainer.appendChild(dialog);

    // existingTask ?
    //     element.replaceWith(form) :
    dialog.showModal();
    // }
}

function createProjectOptions(existingTask) {
    const list = projectList.getList();
    const options = [];

    options[0] = document.createElement('option');
    options[0].setAttribute('projectID', '');
    options[0].textContent = '';

    list.forEach(p => {
        options[(list.indexOf(p)) + 1] = document.createElement('option');
        options[(list.indexOf(p)) + 1].setAttribute('projectID', p.id);
        options[(list.indexOf(p)) + 1].textContent = p.name;
        if (existingTask && options[(list.indexOf(p)) + 1].getAttribute('projectID') === existingTask.projectID) {
            options[(list.indexOf(p)) + 1].selected = true;
        }
        else if (options[(list.indexOf(p)) + 1].getAttribute('projectID') === mainLabel.getAttribute('prjOrFilterID')) {
            options[(list.indexOf(p)) + 1].selected = true;
        }
    });

    return options;
}

export function createProjectForm(existingProject, element) {
    let prjHasForm = projectsSubContainer.querySelector("form") != null;
    let taskHasForm = tasksContainer.querySelector("form") != null;


    if (prjHasForm === false) {
        if (taskHasForm) { tasksContainer.querySelector("form").remove(); }
        const form = document.createElement("form");
        form.classList.add("project-form")
        form.setAttribute("autocomplete", "off");
        if (existingProject) { form.setAttribute("existing-project", existingProject.id); }


        const projectNameInput = document.createElement("input");
        projectNameInput.type = "text";
        projectNameInput.name = "project-name";
        projectNameInput.placeholder = "Enter project name";
        if (existingProject) { projectNameInput.value = existingProject.name; }

        const submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.textContent = "Add";

        const cancelButton = document.createElement("button");
        cancelButton.type = "button";
        cancelButton.textContent = "Cancel";

        form.appendChild(projectNameInput);
        form.appendChild(submitButton);
        form.appendChild(cancelButton);


        existingProject ?
            element.replaceWith(form) :
            projectsSubContainer.appendChild(form);
    }
}

function renderFilters() {
    filterList.getList().forEach((f) => createFilterElement(f));
}

export function updateProjects() {

    //remove any content from container
    projectsSubContainer.replaceChildren();

    //add projects from projectList as elements
    projectList.getList().forEach((p) => createProjectElement(p));

}

export function loadStartPage() {
    taskList.getLocalStoredTasks();
    projectList.getLocalStoredProjects();
    storeListsLocally();
    renderFilters();
    updateProjects();
    const defaultFilter = filterList.getDefault();
    renderMainContent('filter', defaultFilter);

    const targetFilterElement = document.querySelector(`div[name="${defaultFilter.name}"]`);
    updateSelectedViewTag(targetFilterElement);
}



