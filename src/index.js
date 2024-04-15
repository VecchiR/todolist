function entryProperties() {
    return {
        generateId: () => {
            return Math.random().toString(36).substring(2) +
                (new Date()).getTime().toString(36);
        },
    }
}

function taskProperties() {
    return {
        ...entryProperties(),

        setCompleted: () => {
            this.complete = true;
        },

        setProject: () => {
            this.project = 'project set';
        },

        setDate: () => {
            this.date = 'date set';
        },

        setDescription: () => {
            this.description = 'description set';
        },
    }
}

function projectProperties() {
    return {
        ...entryProperties(),
    }
}

function listProperties() {
    return {
        showList: () => {
            console.log(this.list);
        },

        addToList: (entry) => {
            this.list.push(entry);
        },
    }
}

function createTask (name) {
    return {
        ...taskProperties(),
        name,
        id: taskProperties().generateId(),
    }
}

function createProject (name) {
    return {
        ...projectProperties(),
        name,
        id: projectProperties().generateId(),
    }
}

function createTaskList() {
    return {
        ...listProperties(),
        ...createTask(),
    }
}

function createProjectList() {
    return {
        ...listProperties(),
        createProject: (p) => {
        },
    }
}