import { Task } from './task';
export declare class TasksService {
    tasks: Task[];
    getAll(): any;
    getById(id: number): any;
    create(task: Task): any;
    update(task: Task): any;
    delete(id: number): any;
}
