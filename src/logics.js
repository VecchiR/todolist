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

    setDate() {
        this.date = 'date set';
    }

    setDescription(description) {
        this.description = description;
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

