import { Controller, Get, Param } from '@nestjs/common';
import { Task } from './shared/task';
import { TasksService } from './shared/tasks.service';

@Controller('tasks')
export class TasksController { 

  constructor(
    private taskService: TasksService
  ) { }

  @Get()
  async getAll() : Promise<Task[]> {
    return this.taskService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number) : Promise<Task> {
    return this.taskService.getById(id);
  }
}
