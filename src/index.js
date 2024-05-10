import { taskList, projectList } from "./logic";
import { updateSelectedViewTag, createProjectForm, createTaskForm, updateProjects, assingProjectValues, updateTasks, renderMainContent, assingTaskValues, loadStartPage } from "./DOMhandling";
import { storeListsLocally } from "./localstorage";
import './style.css';



export const filtersContainer = document.querySelector('.filters-container');

export const projectsSubContainer = document.querySelector('.projects-subcontainer');
export const addProjectBtn = document.querySelector('.add-project');
addProjectBtn.addEventListener('click', () => {
    createProjectForm();
});

export const mainLabel = document.querySelector('.main-label');
export const tasksContainer = document.querySelector('.tasks-container');
export const addTaskBtn = document.querySelector('.add-task');
addTaskBtn.addEventListener('click', () => {
    createTaskForm();
});

document.addEventListener ('keydown', (e) => {
    if (e.code === 'Escape' && document.querySelector('dialog')) {
        e.preventDefault();
        document.querySelector('dialog').remove();
    }
})


projectsSubContainer.addEventListener('click', (e) => {
    if (e.target.type === 'button') {
        updateProjects();
    }

    else if (e.target.type === 'submit') {
        e.preventDefault();
        if (document.querySelector('input[name=project-name]').value) { //check if name input is filled
            let prj;
            document.querySelector('.project-form').hasAttribute('existing-project') ?
                prj = projectList.getList().find((p) => p.id === document.querySelector('.project-form').getAttribute('existing-project')) :
                prj = projectList.createProject();
            assingProjectValues(prj);
            updateProjects();
            updateTasks();
            storeListsLocally();

            //if this project view is open, update view label
            if (mainLabel.getAttribute('prjOrFilterID') === prj.id) {
                renderMainContent('project', prj);
                console.log(prj.id);
                updateSelectedViewTag(document.querySelector(`div[projectID="${prj.id}"]`));
            }

        }
    }
});

tasksContainer.addEventListener('click', (e) => {
    if (e.target.type === 'button') {
        document.querySelector('dialog').close();
        updateTasks();
    }

    else if (e.target.type === 'submit') {
        e.preventDefault();
        if (document.querySelector('input[name=task-name]').value) { //check if name input is filled
            let task;
            document.querySelector('.task-form').hasAttribute('existing-task') ?
                task = taskList.getList().find((t) => t.id === document.querySelector('.task-form').getAttribute('existing-task')) :
                task = taskList.createTask();
            assingTaskValues(task);
            updateTasks();
            storeListsLocally();
        }
    }

});


loadStartPage();
