import { Task } from './shared/task';
import { TasksService } from './shared/tasks.service';
export declare class TasksController {
    private taskService;
    constructor(taskService: TasksService);
    getAll(): Promise<Task[]>;
    getById(id: number): Promise<Task>;
}
