import { taskList, projectList } from "./logic";

export function storeListsLocally() {
    localStorage.storedTaskList = JSON.stringify(taskList.getList());
    localStorage.storedProjectList = JSON.stringify(projectList.getList());
}