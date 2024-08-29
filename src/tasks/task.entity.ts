export enum TaskStatus {
  Done = 'Done',
  InProgress = 'InProgress',
  ToStart = 'ToStart',
  Cancelled = 'Cancelled',
  InReview = 'InReview',
}

export class Task {
  id: number;
  name: string;
  description: string;
  status: TaskStatus;
  user: null;

  constructor(
    name: string,
    description: string,
    status: TaskStatus,
    user: null,
  ) {
    this.id = 0;
    this.name = name;
    this.description = description;
    this.status = status;
    this.user = user;
  }
}
