import { Injectable } from '@nestjs/common';
import taskList from './task.store';
import { Task, TaskStatus } from './task.entity';

@Injectable()
export class TasksService {
  getTaskByID(id: number): Task {
    return taskList.getTaskByID(id);
  }
  getTasksByUser(userID: number): Task[] {
    return taskList.getTasksByUserID(userID);
  }
  //MUST RETURN THE UNIQUE ID OF THE CREATED TASK
  addTask(
    name: string,
    description: string,
    status: TaskStatus,
    userID: number,
  ) {
    taskList.addTask(name, description, status, userID);
  }
  deleteTask(id: number) {
    taskList.deleteTask(id);
  }
  modifyTask(
    id: number,
    name: string,
    description: string,
    status: TaskStatus,
    userID: number,
  ) {}
}
