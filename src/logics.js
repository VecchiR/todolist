export class Entry {
    generateId = () => {
        return Math.random().toString(36).substring(2) +
            (new Date()).getTime().toString(36);
    }
}

export class Task {
    constructor(name) {
        this.entry = new Entry();
        this.name = name;
        this.id = this.entry.generateId();
    }

    setCompleted() {
        this.complete = !this.complete;
    }

    setProject(prj) {
        this.project = prj;
    }

    setDate() {
        this.date = 'date set';
    }

    setDescription(description) {
        this.description = description;
    }
}

export class Project {
    constructor(name) {
        this.entry = new Entry();
        this.name = name;
        this.id = this.entry.generateId();
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
        let task = new Task(name);
        listMethods.addToList(list, task);
        return list;
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
    const createProject = (name) => {
        let prj = new Project(name);
        listMethods.addToList(list, prj);
        return list;
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

