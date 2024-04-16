class Entry {
    generateId = () => {
        return Math.random().toString(36).substring(2) +
            (new Date()).getTime().toString(36);
    }
}

class Task {
    constructor(name) {
        this.entry = new Entry();
        this.name = name;
        this.id = this.entry.generateId();
    }

    setCompleted() {
        this.complete = true;
    }

    setProject() {
        this.project = 'project set';
    }

    setDate() {
        this.date = 'date set';
    }

    setDescription() {
        this.description = 'description set';
    }
}

class Project {
    constructor(name) {
        this.entry = new Entry();
        this.name = name;
        this.id = this.entry.generateId();
    }
}

class ListMethods {
    getList = () => {
        console.log(list);
    }

    addToList = (entry) => {
        list.push(entry);
    }
}

const taskList = (function () {

    listMethods = new ListMethods();

    list = [];

    createTask = (name) => {
        let task = new Task(name);
        listMethods.addToList(task);
        return list;
    }

    return {
        listMethods,
        createTask,
    }
})();

const projectList = (function () {
    listMethods = new ListMethods();
    list = [];
    createProject = (name) => {
        let prj = new Project(name);
        listMethods.addToList(prj);
        return list;
    }

    return {
        listMethods,
        createProject,
    }
})();