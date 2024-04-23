import { compareAsc, format, add, isBefore, isEqual, isAfter, toDate } from "date-fns";


export class Entry {
    generateId = () => {
        return Math.random().toString(36).substring(2) +
            (new Date()).getTime().toString(36);
    }
}

export class Task {
    constructor() {
        this.entry = new Entry();
        this.id = this.entry.generateId();
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
        let date = new Date(d.getUTCFullYear(), d.getUTCMonth(),d.getUTCDate());
        this.date = date;
    }

    setDescription(description) {
        this.description = description;
    }

    setImportant() {
        this.important = !this.important;
    }

}

export class Project {
    constructor() {
        this.entry = new Entry();
        this.id = this.entry.generateId();
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
}

export const taskList = (function () {

    const listMethods = new ListMethods();

    const list = [];

    const createTask = (name) => {
        let task = new Task();
        listMethods.addToList(list, task);
        return task;
    }

    const getList = () => {
        return listMethods.getList(list);
    }

    return {
        listMethods,
        createTask,
        getList,
    }
})();

export const projectList = (function () {
    const listMethods = new ListMethods();
    const list = [];
    const createProject = () => {
        let prj = new Project();
        listMethods.addToList(list, prj);
        return prj;
    }
    const getList = () => {
        return listMethods.getList(list);
    }

    return {
        listMethods,
        createProject,
        getList,
    }
})();


const getAllTasks = function () {
    let tasks;
    tasks = taskList.getList();
    return tasks;
};

const getInboxTasks = function () {
    let tasks;
    tasks = taskList.getList().filter((t) => t.projectID === '' || t.projectID === undefined);
    return tasks;
};

const getImportantTasks = function () {
    let tasks;
    tasks = taskList.getList().filter((t) => t.important === true);
    return tasks;
};

const getTodayTasks = function () {
    let tasks;
    let now = new Date();
    let today = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
    tasks = taskList.getList().filter((t) => isEqual(t.date, today) === true);
    return tasks;
};

const get7DaysTasks = function () {
    let tasks;
    let now = new Date();
    let today = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
    let next8days = add(today, {days: 8});
    tasks = taskList.getList().filter((t) => isAfter(t.date, today) === true && isBefore(t.date, next8days));
    return tasks;
};


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

    createFilter('Inbox', getInboxTasks);
    createFilter('Today', getTodayTasks);
    createFilter('Next 7 Days', get7DaysTasks);
    createFilter('Important', getImportantTasks);
    createFilter('All Tasks', getAllTasks);

    return {
        listMethods,
        getList,
    }

})();

