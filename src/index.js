class Task {
    constructor (name) {
        this.name = name;
        this.generateId();
    }
    
    setCompleted() {
        this.complete = true;
    }
    
    generateId() {
        this.id = Math.random().toString(36).substring(2) +
            (new Date()).getTime().toString(36);
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


const TaskList = (function () {

    const list = [];

    const createTask = () => {
        let name = `Todo ${list.length+1}`;
        let newTask = new Task(name);
        addTasktoList(newTask);
    }

    const showMeYourList = () => {
        console.log(list); 
    }

    const addTasktoList = (task) => {
        list.push(task);
    } 

    return { createTask, showMeYourList };
})();

TaskList.createTask();
TaskList.showMeYourList();




// ------------------------------------------------------------ FUNÇAO PRA DELETAR=============================================
// function deleteBookFromLibrary(row) {
//     let bookId = row.querySelector('input').value;
//     let bookIndex = myLibrary.findIndex(book => {
//         return book.id === bookId;
//     });

//     myLibrary.splice(bookIndex, 1);
//     booksTable.deleteRow(row.rowIndex);
// }-------------------------------------------------------------------------------------------------------------------------------