import { Task, TaskStatus } from './task.entity';

class TaskFilter {
  public task: Task;
  public length: number;

  constructor(task: Task, length: number) {
    this.task = task;
    this.length = length;
  }
}

class TaskList {
  private taskList: Task[];

  constructor() {
    this.taskList = [];
  }

  _filterTasksByID(id: number): TaskFilter {
    const filteredTasks = this.getList().filter((task) => task.id === id);
    if (filteredTasks.length === 0) {
      return new TaskFilter(null, filteredTasks.length);
    } else {
      return new TaskFilter(filteredTasks[0], filteredTasks.length);
    }
  }

  _filterTasksByUserID(userID: number): Task[] {
    return this.getList().filter((task) => task.user === userID);
  }

  //AVOIDS A USER HAVING A NAME WITH DUPLICATED NAME
  _filterByTaskName(name: string, userID: number): Task[] {
    return this.getList().filter(
      (task) => task.name === name && task.user === userID,
    );
  }

  _deleteTaskFromList(id: number): Task[] {
    return this.getList().filter((task) => task.id != id);
  }

  getList(): Task[] {
    return this.taskList;
  }

  appendTaskToList(task: Task) {
    this.taskList.push(task);
  }

  taskExistsByID(id: number): boolean {
    return !(this._filterTasksByID(id).length === 0);
  }

  getTaskByID(id: number): Task {
    return this._filterTasksByID(id).task;
  }

  getTasksByUserID(userID: number): Task[] {
    return this._filterTasksByUserID(userID);
  }

  addTask(
    name: string,
    description: string,
    status: TaskStatus,
    userID: number,
  ) {
    const filteredTasks = this._filterByTaskName(name, userID);
    if (filteredTasks.length < 0) {
      this.appendTaskToList(new Task(name, description, status, null));
    }
  }

  deleteTask(id: number) {
    if (this.taskExistsByID(id)) {
      return this._deleteTaskFromList(id);
    }
  }
}

const taskList: TaskList = new TaskList();
export default taskList;
