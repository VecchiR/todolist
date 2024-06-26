import { add, isBefore, isEqual, isAfter } from "date-fns";


export class Entry {
    generateId = () => {
        return Math.random().toString(36).substring(2) +
            (new Date()).getTime().toString(36);
    }
}

export class Task {
    constructor({ name, id, projectID, date, description, important, complete }) {
        this.entry = new Entry();
        this.name = name;
        if (!id) {
            this.id = this.entry.generateId();
        } else { this.id = id; }
        this.projectID = projectID;
        this.date = date;
        this.description = description;
        this.important = important;
        this.complete = complete;
    }

    setCompleted() {
        this.complete = !this.complete;
    }

    setName(name) {
        this.name = name;
    }

    setProjectID(projectID) {
        this.projectID = projectID;
    }

    setDate(d) {
        if (d) {
            let date = new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
            this.date = date;
        }
        else {
            this.date = null;
        }
    }

    setDescription(description) {
        this.description = description;
    }

    setImportant() {
        this.important = !this.important;
    }

}

export class Project {
    constructor({ name, id }) {
        this.entry = new Entry();
        this.name = name;
        if (!id) {
            this.id = this.entry.generateId();
        } else { this.id = id; }
    }

    setName(name) {
        this.name = name;
    }
}

export class ListMethods {
    getList = function (list) {
        return list;
    }

    addToList = function (list, entry) {
        list.push(entry);
    }

    removeFromList = function (list, entry) {
        list.splice(list.indexOf(entry), 1);
    }
}

export const taskList = (function () {

    const listMethods = new ListMethods();

    let list = [];

    const createTask = () => {
        let task = new Task({});
        listMethods.addToList(list, task);
        return task;
    }

    const getList = () => {
        return listMethods.getList(list);
    }

    const removeFromList = (task) => {
        listMethods.removeFromList(list, task);
    }

    const getLocalStoredTasks = () => {
        try {
            let storedList = JSON.parse(localStorage.storedTaskList);
            storedList.forEach(
                (x) => {
                    list[storedList.indexOf(x)] = new Task({
                        name: x.name,
                        id: x.id,
                        projectID: x.projectID,
                        date: x.date,
                        description: x.description,
                        important: x.important,
                        complete: x.complete
                    });
                }
            );
        } catch { console.log('No task list found on local storage'); }
    }

    return {
        listMethods,
        createTask,
        getList,
        removeFromList,
        getLocalStoredTasks,
    }
})();

export const projectList = (function () {
    const listMethods = new ListMethods();
    let list = [];
    const createProject = () => {
        let prj = new Project({});
        listMethods.addToList(list, prj);
        return prj;
    }
    const getList = () => {
        return listMethods.getList(list);
    }

    const removeFromList = (prj) => {
        listMethods.removeFromList(list, prj);
    }

    const getLocalStoredProjects = () => {
        try {
            let storedList = JSON.parse(localStorage.storedProjectList);
            storedList.forEach(
                (x) => {
                    list[storedList.indexOf(x)] = new Project({
                        name: x.name,
                        id: x.id
                    });
                }
            );
        } catch { console.log('No project list found on local storage'); }
    }

    return {
        listMethods,
        createProject,
        getList,
        removeFromList,
        getLocalStoredProjects,
    }
})();


const getAllTasks = function () {
    let tasks;
    tasks = taskList.getList().filter((t) => !t.complete);
    return tasks;
};

const getInboxTasks = function () {
    let tasks;
    tasks = taskList.getList().filter((t) => ((t.projectID === '' || t.projectID === undefined) && !t.complete));
    return tasks;
};

const getImportantTasks = function () {
    let tasks;
    tasks = taskList.getList().filter((t) => t.important && !t.complete);
    return tasks;
};

const getTodayTasks = function () {
    let tasks;
    let now = new Date();
    let today = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
    tasks = taskList.getList().filter((t) => isEqual(t.date, today) && !t.complete);
    return tasks;
};

const get7DaysTasks = function () {
    let tasks;
    let now = new Date();
    let today = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
    let next8days = add(today, { days: 8 });
    tasks = taskList.getList().filter((t) => ((isAfter(t.date, today) && isBefore(t.date, next8days)) && !t.complete));
    return tasks;
};

const getCompletedTasks = function () {
    let tasks;
    tasks = taskList.getList().filter((t) => t.complete);
    return tasks;
}


export const filterList = (function () {

    const listMethods = new ListMethods();
    const list = [];
    const createFilter = (name, filterMethod) => {
        let filter = {};
        filter.name = name;
        filter.filterTasks = filterMethod;
        listMethods.addToList(list, filter);
        return filter;
    }
    const getList = () => {
        return listMethods.getList(list);
    }
    const setDefault = (name) => {
        list.forEach((f) => {
            f.name === name ? f.isDefault = true : f.isDefault = false;
        })
    }
    const getDefault = () => {
        return list.find((f) => f.isDefault === true);
    }

    createFilter('Inbox', getInboxTasks);
    createFilter('Today', getTodayTasks);
    createFilter('Next 7 Days', get7DaysTasks);
    createFilter('Important', getImportantTasks);
    createFilter('All Tasks', getAllTasks);
    createFilter('Completed Tasks', getCompletedTasks);

    setDefault('All Tasks');

    return {
        listMethods,
        getList,
        setDefault,
        getDefault,
    }

})();

