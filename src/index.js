class Entry {
    constructor (name) {
        this.name = name;
        this.generateId();
    }

    generateId() {
        this.id = Math.random().toString(36).substring(2) +
            (new Date()).getTime().toString(36);
    }
}



class Task extends Entry {
    
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

class Project extends Entry {

}




class List {
    constructor () {
        this.list = [];
    }

    showList = () => {
        console.log(this.list); 
    }

    addToList = (entry) => {
        this.list.push(entry);
    } 

}

class TaskList extends List {
    createTask = () => {
        let name = `Task ${this.list.length+1}`;
        let newTask = new Task(name);
        this.addToList(newTask);
        console.log(newTask);
    }
}

class ProjectList extends List {
    createProject = () => {
        let name = `Project ${this.list.length+1}`;
        let newProject = new Project(name);
        this.addToList(newProject);
        console.log(newProject);
    }
}




const taskList = new TaskList();
const projectList = new ProjectList();





// ------------------------------------------------------------ FUNÇAO PRA DELETAR=============================================
// function deleteBookFromLibrary(row) {
//     let bookId = row.querySelector('input').value;
//     let bookIndex = myLibrary.findIndex(book => {
//         return book.id === bookId;
//     });

//     myLibrary.splice(bookIndex, 1);
//     booksTable.deleteRow(row.rowIndex);
// }-------------------------------------------------------------------------------------------------------------------------------